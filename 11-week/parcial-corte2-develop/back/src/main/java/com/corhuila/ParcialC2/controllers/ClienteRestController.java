package com.corhuila.ParcialC2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.corhuila.ParcialC2.models.Cliente;
import com.corhuila.ParcialC2.services.IServices.IClienteService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ClienteRestController {

    @Autowired
    private IClienteService clienteService;

    @GetMapping("/cliente")
    public List<Cliente> listarClientes() {
        return clienteService.findAll();
    }

    @GetMapping("/cliente/{id}")
    public Cliente obtenerCliente(@PathVariable Long id) {
        return clienteService.findById(id);
    }

    @PostMapping("/cliente")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente registrarUsuario(@RequestBody Cliente cliente) {
        return clienteService.save(cliente);
    }

    @PutMapping("/cliente/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente actualizarCliente(@RequestBody Cliente cliente, @PathVariable Long id) {
        Cliente clienteActual = clienteService.findById(id);

        clienteActual.setNombre(cliente.getNombre());
        clienteActual.setCorreo(cliente.getCorreo());
        clienteActual.setTelefono(cliente.getTelefono());
        clienteActual.setDireccion(cliente.getDireccion());

        return clienteService.save(clienteActual);
    }

}
