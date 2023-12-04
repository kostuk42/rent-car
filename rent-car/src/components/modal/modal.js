import React, { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    FormControlLabel, FormGroup,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import './modal.css';
// import {Form} from "formik";

const RentalCarPage = () => {
    const [car, setCar] = useState({
        id: 9582,
        year: 2008,
        type: "Suv",
        fuelConsumption: 10.5,
        engineSize: 3.6,
        accessories: ["Leather seats", "Panoramic sunroof", "Power liftgate", "Premium audio system", "Remote start", "Blind-spot monitoring"],
        rentalConditions: {
            minimumAge: 25,
            validDriversLicense: true,
            securityDeposit: true,
            mileage: 5858,
            price: 40,
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Car rented!");
    };

    return (
        <Container>
            <Typography variant="h2">Buick Enclave Rental</Typography>
            <Card>
                <CardMedia
                    image="https://pixabay.com/get/ga549fdbbcd8be3c743a8a917c7a01efa6ccce703eacf1cfd8faad94c0aa6d3f143a0ebec2181fb3bb926ba525df8d6528a1d57f0562539d4905d68d974a60dbd_1280.jpg"
                    alt="Buick Enclave"
                    style={{ height: "300px" }}
                />
                <CardContent>
                    <Typography variant="h5">
                        {car.year} {car.type}
                    </Typography>
                    <Typography variant="body1">
                        Фургон: {car.fuelConsumption} л/100 км
                    </Typography>
                    <Typography variant="body1">
                        Объём двигателя: {car.engineSize} л
                    </Typography>
                    <Typography variant="body1">
                        Доступные аксессуары:
                    </Typography>
                    <ul>
                        {car.accessories.map((accessory) => (
                            <li key={accessory}>{accessory}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            <FormGroup onSubmit={handleSubmit}>
                <TextField
                    label="Имя"
                    type="text"
                    required
                    value={car.name}
                    onChange={(event) => setCar({ ...car, name: event.target.value })}
                />
                <TextField
                    label="Телефон"
                    type="text"
                    required
                    value={car.phone}
                    onChange={(event) => setCar({ ...car, phone: event.target.value })}
                />
                <FormControlLabel
                    control={<Switch />}
                    label="Согласен с условиями аренды"
                />
                <Button type="submit">Арендовать</Button>
            </FormGroup>
        </Container>
    );
};

export default RentalCarPage;
