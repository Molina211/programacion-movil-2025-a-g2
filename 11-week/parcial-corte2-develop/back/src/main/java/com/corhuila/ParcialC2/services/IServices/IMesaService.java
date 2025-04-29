package com.corhuila.ParcialC2.services.IServices;

import java.util.List;

import com.corhuila.ParcialC2.models.Mesa;

public interface IMesaService {

    Mesa obtenerMesaPorId(Long id);

    List<Mesa> obtenerMesasDisponibles();

    void marcarMesaComoOcupada(Long idMesa);

}
