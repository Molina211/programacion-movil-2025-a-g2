package com.corhuila.backReservasUH.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.corhuila.backReservasUH.models.LoginRequest;
import com.corhuila.backReservasUH.models.Usuario;
import com.corhuila.backReservasUH.services.IUsuarioService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping("/api")
public class UsuarioRestController {

    @Autowired
    private IUsuarioService usuarioService;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @GetMapping("/users")
    public List<Usuario> listarUsuarios() {
        return usuarioService.findAll();
    }

    @GetMapping("/users/{id}")
    public Usuario obtenerUsuario(@PathVariable Long id) {
        return usuarioService.findById(id);
    }

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario registrarUsuario(@RequestBody Usuario usuario) {
        // Encriptar la contraseña antes de guardar
        String encryptedPassword = passwordEncoder.encode(usuario.getContrasena());
        usuario.setContrasena(encryptedPassword);
        return usuarioService.save(usuario);
    }

    @PutMapping("/users/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario actualizarUsuario(@RequestBody Usuario usuario, @PathVariable Long id) {
        Usuario usuarioActual = usuarioService.findById(id);

        usuarioActual.setPrimernombre(usuario.getPrimernombre());
        usuarioActual.setSegundonombre(usuario.getSegundonombre());
        usuarioActual.setPrimerapellido(usuario.getPrimerapellido());
        usuarioActual.setSegundoapellido(usuario.getSegundoapellido());
        usuarioActual.setCorreo(usuario.getCorreo());
        usuarioActual.setCodigo_estudiantil(usuario.getCodigo_estudiantil());
        usuarioActual.setContrasena(usuario.getContrasena());
        usuarioActual.setTipo_documento(usuario.getTipo_documento());

        // Encriptar la nueva contraseña si fue modificada
        if (usuario.getContrasena() != null && !usuario.getContrasena().isBlank()) {
            usuarioActual.setContrasena(passwordEncoder.encode(usuario.getContrasena()));
        }

        return usuarioService.save(usuarioActual);
    }

    @DeleteMapping("/users/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarUsuario(@PathVariable Long id) {
        usuarioService.delete(id);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getContrasena() == null || loginRequest.getContrasena().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("La contraseña no puede ser nula o vacía");
        }

        // Primero verificar si el correo existe
        Usuario usuarioPorCorreo = usuarioService.findByCorreo(loginRequest.getCorreo());
        if (usuarioPorCorreo == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario no encontrado");
        }

        // Ahora intentar login completo (correo + contraseña)
        Optional<Usuario> usuario = usuarioService.login(loginRequest.getCorreo(), loginRequest.getContrasena());

        return usuario
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Contraseña incorrecta"));
    }

}
