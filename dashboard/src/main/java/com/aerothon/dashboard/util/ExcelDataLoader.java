package com.aerothon.dashboard.util;

import com.aerothon.dashboard.model.AircraftPart;
import com.aerothon.dashboard.repositories.AircraftPartRepository;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

@Component
public class ExcelDataLoader {

    @Autowired
    private AircraftPartRepository aircraftPartRepository;

    public void loadExcelData(String filePath) throws IOException {
        FileInputStream file = new FileInputStream(new File(filePath));
        XSSFWorkbook workbook = new XSSFWorkbook(file);

        // Get the first sheet from the workbook
        XSSFSheet sheet = workbook.getSheetAt(0);

        // Iterate through each row in the sheet
        Iterator<Row> rowIterator = sheet.iterator();
        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();

            // Extract the data from each cell in the row
            String partName = row.getCell(0).getStringCellValue();
            String materialComposition = row.getCell(1).getStringCellValue();
            int age = (int) row.getCell(2).getNumericCellValue();
            String condition = row.getCell(3).getStringCellValue();
            String location = row.getCell(4).getStringCellValue();
            String manufacturer = row.getCell(5).getStringCellValue();
            String aircraftModel = row.getCell(6).getStringCellValue();
            String potentialUseCases = row.getCell(7).getStringCellValue();
            int newPartsCarbonFootprint = (int) row.getCell(8).getNumericCellValue();
            int recycledPartsCarbonFootprint = (int) row.getCell(9).getNumericCellValue();
            int waterUsageNewParts = (int) row.getCell(10).getNumericCellValue();
            int waterUsageRecycledParts = (int) row.getCell(11).getNumericCellValue();
            int landfillWasteNewParts = (int) row.getCell(12).getNumericCellValue();
            int landfillWasteRecycledParts = (int) row.getCell(13).getNumericCellValue();
            int energyConsumptionNewParts = (int) row.getCell(14).getNumericCellValue();
            int energyConsumptionRecycledParts = (int) row.getCell(15).getNumericCellValue();
            double recyclingRate = row.getCell(16).getNumericCellValue();
            double toxicityScoreNewParts = row.getCell(17).getNumericCellValue();
            double toxicityScoreRecycledParts = row.getCell(18).getNumericCellValue();
            double remanufacturingPotential = row.getCell(19).getNumericCellValue();
            double lifeCycleAssessment = row.getCell(20).getNumericCellValue();
            double renewableMaterialContent = row.getCell(21).getNumericCellValue();
            int carbonFootprintSaved = (int) row.getCell(22).getNumericCellValue();
            int waterUsageSaved = (int) row.getCell(23).getNumericCellValue();
            int landfillWasteSaved = (int) row.getCell(24).getNumericCellValue();
            int energyConsumptionSaved = (int) row.getCell(25).getNumericCellValue();
            double toxicityScoreDifference = row.getCell(26).getNumericCellValue();
            double remanufacturingPotentialPercentage = row.getCell(27).getNumericCellValue();
            double lifeCycleAssessmentScore = row.getCell(28).getNumericCellValue();

            // Load the transformed data into the database table
            AircraftPart aircraftPart = new AircraftPart(partName, materialComposition, age, condition, location,
                    manufacturer, aircraftModel, potentialUseCases, newPartsCarbonFootprint,
                    recycledPartsCarbonFootprint, waterUsageNewParts, waterUsageRecycledParts,
                    landfillWasteNewParts, landfillWasteRecycledParts, energyConsumptionNewParts,
                    energyConsumptionRecycledParts, recyclingRate, toxicityScoreNewParts,
                    toxicityScoreRecycledParts, remanufacturingPotential, lifeCycleAssessment,
                    renewableMaterialContent,carbonFootprintSaved,waterUsageSaved,landfillWasteSaved,energyConsumptionSaved,toxicityScoreDifference,remanufacturingPotentialPercentage,lifeCycleAssessmentScore);
            aircraftPartRepository.save(aircraftPart);
        }

        workbook.close();
        file.close();
    }
}
