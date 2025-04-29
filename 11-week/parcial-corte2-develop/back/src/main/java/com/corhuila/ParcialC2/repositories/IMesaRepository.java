package com.corhuila.ParcialC2.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.corhuila.ParcialC2.models.Mesa;

public interface IMesaRepository extends CrudRepository<Mesa, Long> {
    List<Mesa> findByDisponibleTrue();
}
