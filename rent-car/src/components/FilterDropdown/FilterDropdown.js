// components/FilterDropdown/FilterDropdown.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './FilterDropdown.css';
import {makes} from "../../constants/makes";
import {setFilters} from "../../redux/filtersSlice";
import {setCurrentPage} from "../../redux/paginationSlice";
import {Autocomplete, InputAdornment} from "@mui/material";
import {
    AutocompleteStyles,
    ChevronAutocomplete,
    ChevronSelect, FilterWrapper,
    InputAdornmentStyles,
    Label, selectPriceStyles,
    SelectWrapper,
    StyledInput,
    StyledLi,
    StyledMileFromInput,
    StyledMileToInput,
    StyledPaper
} from "./FilterDropdown.styled";
import {nanoid} from "nanoid";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {MainButton} from "../AdvertCard/AdvertCard.styled";
import {formatNumber, isFiltering, renderPriceValue} from "../../services/utils";


const FilterDropdown = ({prices}) => {
    const dispatch = useDispatch();
    const filters = useSelector(state => state.filters);
    const handleSearch = () => {
        const newFilter = {
            make: filters.make,
            price: filters.price,
            mileage: {min: filters.mileage.min, max: filters.mileage.max},
        }

        if (!isFiltering(newFilter)) {
            dispatch(setCurrentPage(1));
        } else {
            dispatch(setFilters(newFilter));
        }
    };

    const handleMileAgeInput = (e) => {
        dispatch(setFilters({...filters, mileage: {...filters.mileage, [e.target.name]: e.target.value}}));
    }

    const handlePriceInput = (e) => {
        dispatch(setFilters({...filters, price: e.target.value}));
    }

    const handleMakeInput = (e) => {
        dispatch(setFilters({...filters, make: e.target.innerText}));
    }

    return (
        <FilterWrapper>
            <SelectWrapper>
                <Label>
                    Car Brand
                </Label>
                <Autocomplete
                    onChange={(e) => handleMakeInput(e)}
                    sx={AutocompleteStyles}
                    options={makes}
                    value={filters.make}
                    placeholder={'Make'}
                    PaperComponent={StyledPaper}
                    renderOption={(props, option) => (
                        <StyledLi {...props} key={nanoid()}>
                            {option}
                        </StyledLi>
                    )}
                    renderInput={(params) => (
                        <div ref={params.InputProps.ref} style={{position: 'relative'}}>
                            <input type="text" placeholder="Enter the text" {...params.inputProps} />
                            <ChevronAutocomplete/>
                        </div>
                    )}
                />
            </SelectWrapper>
            <SelectWrapper>
                <Label>
                    Price/ 1 hour
                </Label>
                <Select
                    value={filters.price}
                    IconComponent={ChevronSelect}
                    onChange={handlePriceInput}
                    renderValue={renderPriceValue}
                    type="text"
                    MenuProps={{
                        sx: selectPriceStyles
                    }}
                    input={
                        <StyledInput placeholder="To $"/>
                    }>
                    {prices.map((price, index) => (
                        <MenuItem key={index} value={price}>
                            {price}
                        </MenuItem>
                    ))}

                </Select>
            </SelectWrapper>
                <SelectWrapper style={{minWidth: '320px'}}>
                    <Label>Car mileage / km</Label>
                    <StyledMileFromInput
                        type="text"
                        name="min"
                        value={formatNumber(filters.mileage.min)}
                        startAdornment={
                            <InputAdornment
                                sx={InputAdornmentStyles}
                                position="start">
                                From
                            </InputAdornment>
                        }
                        onChange={(e) => handleMileAgeInput(e)}/>
                    <StyledMileToInput
                        type="text"
                        name="max"
                        value={formatNumber(filters.mileage.max)}
                        startAdornment={
                            <InputAdornment
                                sx={InputAdornmentStyles}
                                position="start">
                                To
                            </InputAdornment>
                        }
                        onChange={(e) => handleMileAgeInput(e)}/>
                </SelectWrapper>
            <MainButton width={'136px'} height={'30px'} marginTop={'auto'}
                onClick={() => handleSearch(filters.mileage.min, filters.mileage.max)} >Search</MainButton>
        </FilterWrapper>
    );
}

export default FilterDropdown;
