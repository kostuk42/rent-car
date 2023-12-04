// components/AdvertDetailsModal/AdvertDetailsModal.js
import React from 'react';
import { useParams } from 'react-router-dom';
import {Button, Modal, Typography} from "@mui/material";
import Box from "@mui/material/Box";
// import Close from "../../assets/images/close.svg";
import {
    CloseIcon, ConditionItem, ConditionList, ConditionSpan,
    Description, IconX,
    Image,
    Info,
    Item,
    List, RentButton, Span,
    TextWrap,
    Title,
    Wrap,
    Wrapper
} from "./AdvertDetailsModal.styled";
import {Close} from "@mui/icons-material";
import {onImageError} from "../AdvertCard/AdvertCard";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 541,
    maxHeight: 830,
    bgcolor: 'background.paper',
    borderRadius: 6,
    boxShadow: 24,
};

const AdvertDetailsModal = ({open, setOpen, data}) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Wrapper>
                        <Close onClick={handleClose}
                                 sx={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                 }}
                        />
                        <Image src={data.img || data.photoLink} alt={data.make} width="461" height="248" onError={onImageError} />
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
                        <RentButton onClick={() => {
                            window.location.href = 'tel:+380730000000';
                        }}>
                            Rental
                            car
                        </RentButton>
                    </Wrapper>
                </Box>
            </Modal>
        </div>
    );
}

export default AdvertDetailsModal;
