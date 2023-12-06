import React from 'react';
import {Modal} from "@mui/material";
import Box from "@mui/material/Box";
import {
    closeIconStyles,
    ConditionItem,
    ConditionList,
    ConditionSpan,
    Description,
    Image,
    Info,
    Item,
    List, modalStyle,
    RentButton,
    Span,
    TextWrap,
    Title,
    Wrap,
    Wrapper
} from "./AdvertDetailsModal.styled";
import {Close} from "@mui/icons-material";
import onImageError from "../AdvertCard/AdvertCard";



const AdvertDetailsModal = ({open, setOpen, data}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <Close onClick={handleClose}
                           sx={closeIconStyles}/>
                    <Wrapper>
                        <Image src={data.img || data.photoLink} alt={data.make} width="461" height="248"
                               onError={onImageError}/>
                        <Wrap>
                            <TextWrap>
                                <Title>
                                    {data.make} <Span>{data.model}, </Span>
                                    {data.year}
                                </Title>
                            </TextWrap>
                            <List>
                                <Item>{data.address.split(',')[1]}</Item>
                                <Item>{data.address.split(',')[2]}</Item>
                                <Item>Id: </Item>
                                <Item>Year: {data.year}</Item>
                                <Item>Type: {data.type}</Item>
                            </List>
                            <List>
                                <Item>Fuel Consumption: {data.fuelConsumption}</Item>
                                <Item>Engine Size: {data.engineSize}</Item>
                            </List>
                            <Description>{data.description}</Description>
                            <Info>Accessories and functionalities:</Info>
                            <List>
                                {data.accessories.map(item => (
                                    <Item key={item}>{item}</Item>
                                ))}
                            </List>
                            <List>
                                {data.functionalities.map(item => (
                                    <Item key={item}>{item}</Item>
                                ))}
                            </List>
                            <Info>Rental Conditions:</Info>
                            <ConditionList>
                                <ConditionItem>
                                    Minimum age:{' '}
                                    <ConditionSpan>
                                        {new Date().getFullYear() - data.year}
                                    </ConditionSpan>
                                </ConditionItem>
                                <ConditionItem>
                                    {data.rentalConditions.split('\n')[1]}
                                </ConditionItem>
                                <ConditionItem>
                                    {data.rentalConditions.split('\n')[2]}
                                </ConditionItem>
                                <ConditionItem>
                                    Mileage:{' '}
                                    <ConditionSpan>
                                        {data.mileage.toLocaleString('en-US')}
                                    </ConditionSpan>
                                </ConditionItem>
                                <ConditionItem>
                                    Price: <ConditionSpan>{data.rentalPrice}</ConditionSpan>
                                </ConditionItem>
                            </ConditionList>
                        </Wrap>
                    </Wrapper>
                    <RentButton onClick={() => {
                        window.location.href = 'tel:+380730000000';
                    }}>
                        Rental
                        car
                    </RentButton>
                </Box>
            </Modal>
    );
}

export default AdvertDetailsModal;
