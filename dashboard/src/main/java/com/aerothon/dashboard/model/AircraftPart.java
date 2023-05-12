package com.aerothon.dashboard.model;


import jakarta.persistence.*;


@Entity
@Table(name = "aircraft_parts")
public class AircraftPart {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(name = "part_name")
        private String partName;

        @Column(name = "material_composition")
        private String materialComposition;

        @Column(name = "age_years")
        private int ageYears;

        @Column(name = "condition_")
        private String condition;

        @Column(name = "location")
        private String location;

        @Column(name = "manufacturer")
        private String manufacturer;

        @Column(name = "aircraft_model")
        private String aircraftModel;

        @Column(name = "potential_use_cases")
        private String potentialUseCases;

        @Column(name = "new_parts_carbon_footprint_kg_co2e")
        private int newPartsCarbonFootprint;

        @Column(name = "recycled_parts_carbon_footprint_kg_co2e")
        private int recycledPartsCarbonFootprint;

        @Column(name = "water_usage_new_parts_liters")
        private int waterUsageNewParts;

        @Column(name = "water_usage_recycled_parts_liters")
        private int waterUsageRecycledParts;

        @Column(name = "landfill_waste_new_parts_kg")
        private int landfillWasteNewParts;

        @Column(name = "landfill_waste_recycled_parts_kg")
        private int landfillWasteRecycledParts;

        @Column(name = "energy_consumption_new_parts_kwh")
        private int energyConsumptionNewParts;

        @Column(name = "energy_consumption_recycled_parts_kwh")
        private int energyConsumptionRecycledParts;

        @Column(name = "recycling_rate_percent")
        private double recyclingRate;

        @Column(name = "toxicity_score_new_parts")
        private double toxicityScoreNewParts;

        @Column(name = "toxicity_score_recycled_parts")
        private double toxicityScoreRecycledParts;

        @Column(name = "remanufacturing_potential")
        private double remanufacturingPotential;

        @Column(name = "life_cycle_assessment")
        private double lifeCycleAssessment;

        @Column(name = "renewable_material_content_percent")
        private double renewableMaterialContent;

        @Column(name = "carbon_footprint_saved_kg_co2e")
        private int carbonFootprintSaved;

        @Column(name = "water_usage_saved_liters")
        private int waterUsageSaved;

        @Column(name = "landfill_waste_saved_kg")
        private int landfillWasteSaved;

        @Column(name = "energy_consumption_saved_kwh")
        private int energyConsumptionSaved;

        @Column(name = "toxicity_score_difference")
        private double toxicityScoreDifference;

        @Column(name = "remanufacturing_potential_percent")
        private double remanufacturingPotentialPercent;

        @Column(name = "life_cycle_assessment_score")
        private double lifeCycleAssessmentScore;

    public AircraftPart() {
    }

    public AircraftPart(String partName, String materialComposition, int ageYears, String condition, String location, String manufacturer, String aircraftModel, String potentialUseCases, int newPartsCarbonFootprint, int recycledPartsCarbonFootprint, int waterUsageNewParts, int waterUsageRecycledParts, int landfillWasteNewParts, int landfillWasteRecycledParts, int energyConsumptionNewParts, int energyConsumptionRecycledParts, double recyclingRate, double toxicityScoreNewParts, double toxicityScoreRecycledParts, double remanufacturingPotential, double lifeCycleAssessment, double renewableMaterialContent, int carbonFootprintSaved, int waterUsageSaved, int landfillWasteSaved, int energyConsumptionSaved, double toxicityScoreDifference, double remanufacturingPotentialPercent, double lifeCycleAssessmentScore) {
        this.partName = partName;
        this.materialComposition = materialComposition;
        this.ageYears = ageYears;
        this.condition = condition;
        this.location = location;
        this.manufacturer = manufacturer;
        this.aircraftModel = aircraftModel;
        this.potentialUseCases = potentialUseCases;
        this.newPartsCarbonFootprint = newPartsCarbonFootprint;
        this.recycledPartsCarbonFootprint = recycledPartsCarbonFootprint;
        this.waterUsageNewParts = waterUsageNewParts;
        this.waterUsageRecycledParts = waterUsageRecycledParts;
        this.landfillWasteNewParts = landfillWasteNewParts;
        this.landfillWasteRecycledParts = landfillWasteRecycledParts;
        this.energyConsumptionNewParts = energyConsumptionNewParts;
        this.energyConsumptionRecycledParts = energyConsumptionRecycledParts;
        this.recyclingRate = recyclingRate;
        this.toxicityScoreNewParts = toxicityScoreNewParts;
        this.toxicityScoreRecycledParts = toxicityScoreRecycledParts;
        this.remanufacturingPotential = remanufacturingPotential;
        this.lifeCycleAssessment = lifeCycleAssessment;
        this.renewableMaterialContent = renewableMaterialContent;
        this.carbonFootprintSaved = carbonFootprintSaved;
        this.waterUsageSaved = waterUsageSaved;
        this.landfillWasteSaved = landfillWasteSaved;
        this.energyConsumptionSaved = energyConsumptionSaved;
        this.toxicityScoreDifference = toxicityScoreDifference;
        this.remanufacturingPotentialPercent = remanufacturingPotentialPercent;
        this.lifeCycleAssessmentScore = lifeCycleAssessmentScore;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPartName() {
        return partName;
    }

    public void setPartName(String partName) {
        this.partName = partName;
    }

    public String getMaterialComposition() {
        return materialComposition;
    }

    public void setMaterialComposition(String materialComposition) {
        this.materialComposition = materialComposition;
    }

    public int getAgeYears() {
        return ageYears;
    }

    public void setAgeYears(int ageYears) {
        this.ageYears = ageYears;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getAircraftModel() {
        return aircraftModel;
    }

    public void setAircraftModel(String aircraftModel) {
        this.aircraftModel = aircraftModel;
    }

    public String getPotentialUseCases() {
        return potentialUseCases;
    }

    public void setPotentialUseCases(String potentialUseCases) {
        this.potentialUseCases = potentialUseCases;
    }

    public int getNewPartsCarbonFootprint() {
        return newPartsCarbonFootprint;
    }

    public void setNewPartsCarbonFootprint(int newPartsCarbonFootprint) {
        this.newPartsCarbonFootprint = newPartsCarbonFootprint;
    }

    public int getRecycledPartsCarbonFootprint() {
        return recycledPartsCarbonFootprint;
    }

    public void setRecycledPartsCarbonFootprint(int recycledPartsCarbonFootprint) {
        this.recycledPartsCarbonFootprint = recycledPartsCarbonFootprint;
    }

    public int getWaterUsageNewParts() {
        return waterUsageNewParts;
    }

    public void setWaterUsageNewParts(int waterUsageNewParts) {
        this.waterUsageNewParts = waterUsageNewParts;
    }

    public int getWaterUsageRecycledParts() {
        return waterUsageRecycledParts;
    }

    public void setWaterUsageRecycledParts(int waterUsageRecycledParts) {
        this.waterUsageRecycledParts = waterUsageRecycledParts;
    }

    public int getLandfillWasteNewParts() {
        return landfillWasteNewParts;
    }

    public void setLandfillWasteNewParts(int landfillWasteNewParts) {
        this.landfillWasteNewParts = landfillWasteNewParts;
    }

    public int getLandfillWasteRecycledParts() {
        return landfillWasteRecycledParts;
    }

    public void setLandfillWasteRecycledParts(int landfillWasteRecycledParts) {
        this.landfillWasteRecycledParts = landfillWasteRecycledParts;
    }

    public int getEnergyConsumptionNewParts() {
        return energyConsumptionNewParts;
    }

    public void setEnergyConsumptionNewParts(int energyConsumptionNewParts) {
        this.energyConsumptionNewParts = energyConsumptionNewParts;
    }

    public int getEnergyConsumptionRecycledParts() {
        return energyConsumptionRecycledParts;
    }

    public void setEnergyConsumptionRecycledParts(int energyConsumptionRecycledParts) {
        this.energyConsumptionRecycledParts = energyConsumptionRecycledParts;
    }

    public double getRecyclingRate() {
        return recyclingRate;
    }

    public void setRecyclingRate(double recyclingRate) {
        this.recyclingRate = recyclingRate;
    }

    public double getToxicityScoreNewParts() {
        return toxicityScoreNewParts;
    }

    public void setToxicityScoreNewParts(double toxicityScoreNewParts) {
        this.toxicityScoreNewParts = toxicityScoreNewParts;
    }

    public double getToxicityScoreRecycledParts() {
        return toxicityScoreRecycledParts;
    }

    public void setToxicityScoreRecycledParts(double toxicityScoreRecycledParts) {
        this.toxicityScoreRecycledParts = toxicityScoreRecycledParts;
    }

    public double getRemanufacturingPotential() {
        return remanufacturingPotential;
    }

    public void setRemanufacturingPotential(double remanufacturingPotential) {
        this.remanufacturingPotential = remanufacturingPotential;
    }

    public double getLifeCycleAssessment() {
        return lifeCycleAssessment;
    }

    public void setLifeCycleAssessment(double lifeCycleAssessment) {
        this.lifeCycleAssessment = lifeCycleAssessment;
    }

    public double getRenewableMaterialContent() {
        return renewableMaterialContent;
    }

    public void setRenewableMaterialContent(double renewableMaterialContent) {
        this.renewableMaterialContent = renewableMaterialContent;
    }

    public int getCarbonFootprintSaved() {
        return carbonFootprintSaved;
    }

    public void setCarbonFootprintSaved(int carbonFootprintSaved) {
        this.carbonFootprintSaved = carbonFootprintSaved;
    }

    public int getWaterUsageSaved() {
        return waterUsageSaved;
    }

    public void setWaterUsageSaved(int waterUsageSaved) {
        this.waterUsageSaved = waterUsageSaved;
    }

    public int getLandfillWasteSaved() {
        return landfillWasteSaved;
    }

    public void setLandfillWasteSaved(int landfillWasteSaved) {
        this.landfillWasteSaved = landfillWasteSaved;
    }

    public int getEnergyConsumptionSaved() {
        return energyConsumptionSaved;
    }

    public void setEnergyConsumptionSaved(int energyConsumptionSaved) {
        this.energyConsumptionSaved = energyConsumptionSaved;
    }

    public double getToxicityScoreDifference() {
        return toxicityScoreDifference;
    }

    public void setToxicityScoreDifference(double toxicityScoreDifference) {
        this.toxicityScoreDifference = toxicityScoreDifference;
    }

    public double getRemanufacturingPotentialPercent() {
        return remanufacturingPotentialPercent;
    }

    public void setRemanufacturingPotentialPercent(double remanufacturingPotentialPercent) {
        this.remanufacturingPotentialPercent = remanufacturingPotentialPercent;
    }

    public double getLifeCycleAssessmentScore() {
        return lifeCycleAssessmentScore;
    }

    public void setLifeCycleAssessmentScore(double lifeCycleAssessmentScore) {
        this.lifeCycleAssessmentScore = lifeCycleAssessmentScore;
    }
}