package com.corhuila.ParcialC2.services.IServices;

import java.util.List;

import com.corhuila.ParcialC2.models.Cliente;

public interface IClienteService {

    public List<Cliente> findAll();

    public Cliente findById(Long id);

    public Cliente save(Cliente cliente);
}
