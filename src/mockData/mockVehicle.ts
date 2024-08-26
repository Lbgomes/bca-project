import { VehicleType } from "types/vehicle";

export const mockVehicle: VehicleType = {
    "make": "Toyota",
    "model": "C-HR",
    "engineSize": "1.6L",
    "fuel": "petrol",
    "year": 2023,
    "mileage": 5090,
    "auctionDateTime": "2024/09/15 13:00:00",
    "startingBid": 15000,
    "favourite": false,
    "details": {
        "specification": {
            "vehicleType": "Car",
            "colour": "RED",
            "fuel": "petrol",
            "transmission": "Manual",
            "numberOfDoors": 3,
            "co2Emissions": "139 g/km",
            "noxEmissions": 230,
            "numberOfKeys": 2
        },
        "ownership": {
            "logBook": "Present",
            "numberOfOwners": 8,
            "dateOfRegistration": "2015/03/31 09:00:00"
        },
        "equipment": [
            "Air Conditioning",
            "Tyre Inflation Kit",
            "Photocopy of V5 Present",
            "Navigation HDD",
            "17 Alloy Wheels",
            "Engine Mods/Upgrades",
            "Modifd/Added Body Parts"
        ]
    }
};