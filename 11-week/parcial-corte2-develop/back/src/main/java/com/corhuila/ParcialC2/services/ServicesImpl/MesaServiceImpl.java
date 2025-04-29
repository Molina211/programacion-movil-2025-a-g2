package com.corhuila.ParcialC2.services.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.corhuila.ParcialC2.models.Mesa;
import com.corhuila.ParcialC2.repositories.IMesaRepository;
import com.corhuila.ParcialC2.services.IServices.IMesaService;

@Service
public class MesaServiceImpl implements IMesaService {

    @Autowired
    private IMesaRepository mesaRepository;

    public List<Mesa> obtenerMesasDisponibles() {
        return mesaRepository.findByDisponibleTrue();
    }

    public void marcarMesaComoOcupada(Long idMesa) {
        Mesa mesa = mesaRepository.findById(idMesa).orElseThrow();
        mesa.setDisponible(false);
        mesaRepository.save(mesa);
    }

    // Método save para guardar o actualizar la mesa
    public Mesa save(Mesa mesa) {
        return mesaRepository.save(mesa);
    }

    // Método para obtener la mesa por ID
    public Mesa obtenerMesaPorId(Long id) {
        return mesaRepository.findById(id).orElseThrow(() -> new RuntimeException("Mesa no encontrada"));
    }
}
