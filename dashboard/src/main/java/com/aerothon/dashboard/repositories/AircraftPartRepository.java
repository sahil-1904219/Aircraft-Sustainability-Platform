package com.aerothon.dashboard.repositories;

import com.aerothon.dashboard.model.AircraftPart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AircraftPartRepository extends JpaRepository<AircraftPart, Long> {


    List<AircraftPart> findByPartNameAndManufacturer(String name, String manufacturer);



    List<AircraftPart> findByPartName(String name);

    List<AircraftPart> findByManufacturer(String manufacturer);


}