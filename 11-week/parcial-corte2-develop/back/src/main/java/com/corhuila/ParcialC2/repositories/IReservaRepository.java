package com.corhuila.ParcialC2.repositories;

import org.springframework.data.repository.CrudRepository;

import com.corhuila.ParcialC2.models.Reserva;

public interface IReservaRepository extends CrudRepository<Reserva, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario

}
