package com.aerothon.dashboard.controllers;

import com.aerothon.dashboard.model.AircraftPart;
import com.aerothon.dashboard.repositories.AircraftPartRepository;
import com.aerothon.dashboard.services.AircraftPartsService;
import com.aerothon.dashboard.util.ExcelDataLoader;
import com.fasterxml.jackson.databind.JsonNode;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@RestController
@RequestMapping("/parts")
@CrossOrigin(origins = "http://localhost:3000")
public class AircraftPartsController {

    @Autowired
    private AircraftPartRepository aircraftPartsRepository;

    @Autowired
    private ExcelDataLoader excelDataLoader;

    @Autowired
    private AircraftPartsService aircraftPartsService;

    @GetMapping("/{id}")
    public ResponseEntity<AircraftPart> getPartById(@PathVariable Long id) {
        Optional<AircraftPart> part = aircraftPartsRepository.findById(id);
        return part.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public List<AircraftPart> getAllParts() {
        return aircraftPartsRepository.findAll();
    }

    @GetMapping("/newParts")
    public List<Map<String,Object>>  getNewParts() {

        return aircraftPartsService.getNewAircraftPartsToSell();
    }
    @GetMapping("/recycle")
    public List<Map<String,Object>>  getPartsToRecycle() {

        return aircraftPartsService.getPartsToRecycle();
    }
    @GetMapping("/oldParts")
    public List<Map<String,Object>> getOldParts() {
        return aircraftPartsService.getOldAircraftPartsToSell();
    }
    @GetMapping("/search")
    public List<AircraftPart> searchParts(@RequestParam(name = "name", required = false) String name,
                                          @RequestParam(name = "manufacturer", required = false) String manufacturer) {
        if (name != null && manufacturer != null) {
            return aircraftPartsRepository.findByPartNameAndManufacturer(name, manufacturer);
        } else if (name != null) {
            return aircraftPartsRepository.findByPartName(name);
        } else if (manufacturer != null) {
            return aircraftPartsRepository.findByManufacturer(manufacturer);
        }  else {
            return Collections.emptyList();
        }
    }

    @PostMapping
    public AircraftPart createPart(@RequestBody AircraftPart aircraftPart) {
        return aircraftPartsRepository.save(aircraftPart);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AircraftPart> updatePart(@PathVariable Long id, @RequestBody AircraftPart updatedPart) {
        Optional<AircraftPart> part = aircraftPartsRepository.findById(id);
        if (part.isPresent()) {
            AircraftPart existingPart = part.get();
            existingPart.setPartName(updatedPart.getPartName());
            existingPart.setManufacturer(updatedPart.getManufacturer());
            aircraftPartsRepository.save(existingPart);
            return ResponseEntity.ok(existingPart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePart(@PathVariable Long id) {
        Optional<AircraftPart> part = aircraftPartsRepository.findById(id);
        if (part.isPresent()) {
            aircraftPartsRepository.delete(part.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/uploadFile")
    public ResponseEntity<String> uploadExcel(@RequestParam("file") MultipartFile file) {
        try {
            XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
            excelDataLoader.loadExcelData(workbook);
            return ResponseEntity.ok().body("Excel file uploaded successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload Excel file");
        }
    }


}
