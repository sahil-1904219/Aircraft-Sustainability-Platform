package com.aerothon.dashboard.services;

import com.aerothon.dashboard.model.AircraftPart;
import com.aerothon.dashboard.repositories.AircraftPartRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AircraftPartsService {

    @Autowired
    AircraftPartRepository aircraftPartRepository;


    public List<Map<String,Object>> getNewAircraftPartsToSell()
    {
       List<Map<String,Object>> newAircraftParts=new ArrayList<>();

        List<AircraftPart> aircraftParts=aircraftPartRepository.findByCondition("new");
        for(AircraftPart aircraftPart:aircraftParts)
        {
            Map<String,Object> newAircraftPart=new HashMap<>();
            newAircraftPart.put("Part Name",aircraftPart.getPartName());
            newAircraftPart.put("Material Composition",aircraftPart.getMaterialComposition());
            newAircraftPart.put("Age (years)",aircraftPart.getAgeYears());
            newAircraftPart.put("Location",aircraftPart.getLocation());
            newAircraftPart.put("Manufacturer",aircraftPart.getManufacturer());
            newAircraftPart.put("Aircraft Model",aircraftPart.getAircraftModel());
            newAircraftParts.add(newAircraftPart);

        }
        return newAircraftParts;
    }

    public List<Map<String,Object>> getOldAircraftPartsToSell()
    {
        List<Map<String,Object>> oldAircraftParts=new ArrayList<>();

        List<AircraftPart> aircraftParts=aircraftPartRepository.findByCondition("used");
        for(AircraftPart aircraftPart:aircraftParts)
        {
            Map<String,Object> oldAircraftPart=new HashMap<>();
            oldAircraftPart.put("Part Name",aircraftPart.getPartName());
            oldAircraftPart.put("Material Composition",aircraftPart.getMaterialComposition());
            oldAircraftPart.put("Age (years)",aircraftPart.getAgeYears());
            oldAircraftPart.put("Location",aircraftPart.getLocation());
            oldAircraftPart.put("Manufacturer",aircraftPart.getManufacturer());
            oldAircraftPart.put("Aircraft Model",aircraftPart.getAircraftModel());
            oldAircraftPart.put("Potential Uses",aircraftPart.getPotentialUseCases());
            oldAircraftParts.add(oldAircraftPart);

        }
        return oldAircraftParts;
    }
    public List<Map<String,Object>> getPartsToRecycle()
    {
        List<AircraftPart> aircraftParts=aircraftPartRepository.findByRecyclingRateGreaterThan(50.0);
        List<Map<String,Object>> toRecycleAircraftParts=new ArrayList<>();

        for(AircraftPart aircraftPart:aircraftParts)
        {
            Map<String,Object> toRecycleAircraftPart=new HashMap<>();
            toRecycleAircraftPart.put("Part Name",aircraftPart.getPartName());
            toRecycleAircraftPart.put("Material Composition",aircraftPart.getMaterialComposition());
            toRecycleAircraftPart.put("Age (years)",aircraftPart.getAgeYears());
            toRecycleAircraftPart.put("Location",aircraftPart.getLocation());
            toRecycleAircraftPart.put("Manufacturer",aircraftPart.getManufacturer());
            toRecycleAircraftPart.put("Aircraft Model",aircraftPart.getAircraftModel());
            toRecycleAircraftPart.put("Recycle Rate",aircraftPart.getRecyclingRate());
            toRecycleAircraftParts.add(toRecycleAircraftPart);

        }
        return toRecycleAircraftParts;
    }
}
