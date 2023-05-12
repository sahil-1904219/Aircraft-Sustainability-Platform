package com.aerothon.dashboard.repositories;

import com.aerothon.dashboard.model.AircraftPart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AircraftPartRepository extends JpaRepository<AircraftPart, Long> {
    // You can add custom methods here if needed
}