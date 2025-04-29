package com.corhuila.ParcialC2.repositories;

import org.springframework.data.repository.CrudRepository;

import com.corhuila.ParcialC2.models.Cliente;

public interface IClienteRepository extends CrudRepository<Cliente, Long> {

}
