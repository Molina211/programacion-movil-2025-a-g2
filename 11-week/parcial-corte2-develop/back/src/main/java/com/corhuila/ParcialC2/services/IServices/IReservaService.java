package com.corhuila.ParcialC2.services.IServices;

import java.util.List;

import com.corhuila.ParcialC2.models.Reserva;

public interface IReservaService {

    public List<Reserva> findAll();

    public Reserva findById(Long id);

    public Reserva save(Reserva Reserva);

    public void delete(Long id);
}
