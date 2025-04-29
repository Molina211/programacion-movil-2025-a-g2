package com.corhuila.ParcialC2.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.corhuila.ParcialC2.models.Mesa;
import com.corhuila.ParcialC2.services.ServicesImpl.MesaServiceImpl;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MesaRestController {

    @Autowired
    private MesaServiceImpl mesaService;

    @GetMapping("/disponibles")
    public List<Mesa> listarMesasDisponibles() {
        return mesaService.obtenerMesasDisponibles();
    }

    @PostMapping("/mesa")
    public Mesa agregarMesa(@RequestBody Mesa nuevaMesa) {
        return mesaService.save(nuevaMesa);
    }

}
