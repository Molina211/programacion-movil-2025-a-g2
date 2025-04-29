package com.corhuila.ParcialC2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.corhuila.ParcialC2.models.Mesa;
import com.corhuila.ParcialC2.models.Reserva;
import com.corhuila.ParcialC2.services.IServices.IMesaService;
import com.corhuila.ParcialC2.services.IServices.IReservaService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ReservaRestController {

    @Autowired
    private IReservaService reservaService;

    @Autowired
    private IMesaService mesaService;

    @GetMapping("/reserva")
    public List<Reserva> listarReservas() {
        return reservaService.findAll();
    }

    @GetMapping("/reserva/{id}")
    public Reserva obtenerReserva(@PathVariable Long id) {
        return reservaService.findById(id);
    }

    @PostMapping("/reserva")
    @ResponseStatus(HttpStatus.CREATED)
    public Reserva registrarReserva(@RequestBody Reserva reserva) {
        Mesa mesa = reserva.getMesa();

        if (mesa == null || mesa.getId() == null) {
            throw new RuntimeException("Debe seleccionar una mesa.");
        }

        Mesa mesaSeleccionada = mesaService.obtenerMesaPorId(mesa.getId());

        if (!mesaSeleccionada.isDisponible()) {
            throw new RuntimeException("La mesa seleccionada no está disponible.");
        }

        // Marcar mesa como ocupada
        mesaSeleccionada.setDisponible(false);
        reserva.setMesa(mesaSeleccionada);

        return reservaService.save(reserva);
    }

    @PutMapping("/reserva/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Reserva actualizarReserva(@RequestBody Reserva Reserva, @PathVariable Long id) {
        Reserva reservaActual = reservaService.findById(id);

        reservaActual.setHora(Reserva.getHora());
        reservaActual.setFecha(Reserva.getFecha());
        reservaActual.setDescripcion(Reserva.getDescripcion());

        return reservaService.save(reservaActual);
    }

    @DeleteMapping("/reserva/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void eliminarReserva(@PathVariable Long id) {
        reservaService.delete(id);
    }
}
