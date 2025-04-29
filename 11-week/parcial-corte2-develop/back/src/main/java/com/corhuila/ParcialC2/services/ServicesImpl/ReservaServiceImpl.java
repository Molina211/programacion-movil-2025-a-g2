package com.corhuila.ParcialC2.services.ServicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.corhuila.ParcialC2.models.Reserva;
import com.corhuila.ParcialC2.repositories.IReservaRepository;
import com.corhuila.ParcialC2.services.IServices.IReservaService;

@Service
public class ReservaServiceImpl implements IReservaService {

    @Autowired
    private IReservaRepository reservaRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Reserva> findAll() {
        return (List<Reserva>) reservaRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true)
    public Reserva findById(Long id) {
        return reservaRepository.findById(id).orElse(null);
    }

    @Override
    @Transactional
    public Reserva save(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        reservaRepository.deleteById(id);
    }
}
