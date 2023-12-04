// components/FilterDropdown/FilterDropdown.js
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './FilterDropdown.css';
import {makes} from "../../constants/makes";
import {setFilters} from "../../redux/filtersSlice";
import {isFiltering} from "../Catalog/Catalog";
import {setCurrentPage} from "../../redux/paginationSlice";
import {Autocomplete, InputAdornment} from "@mui/material";
import {
    AutocompleteStyles,
    ChevronAutocomplete,
    ChevronSelect,
    InputAdornmentStyles,
    Label,
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


export const toNumber = (value) => {
    return +(value.replace(/,/g, ''))
}

const formatNumber = (miles) => {
    if (!miles || Number.isNaN(miles)) {
        return ''
    }
    const normalized = miles.replace(/,/g, '');
    return normalized.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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
        }
        dispatch(setFilters(newFilter));
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
        <div className="filter-dropdown">
            <SelectWrapper>
                <Label>
                    Car Brand
                </Label>
                <Autocomplete
                    onChange={(e) => handleMakeInput(e)}
                    sx={AutocompleteStyles}
                    options={makes}
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
                    renderValue={(price) => {
                        if (price === 'All') {
                            price = ' '
                        }
                        return `To ${price}$`
                    }}
                    MenuProps={{
                        sx: {
                            '& .MuiPaper-root': {
                                borderRadius: '14px',
                                border: '1px solid #1214170D',
                                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
                            },
                            '& li': {
                                fontSize: '16px',
                                fontWeight: 500,
                                lineHeight: '20px',
                                letterSpacing: 0,
                                color: '#12141733'
                            },
                            '& li:hover': {
                                color: '#121417!important'
                            },
                            '& li.Mui-selected': {
                                color: '#121417',
                                backgroundColor: "transparent"
                            }

                        }
                    }}
                    input={<StyledInput placeholder="To $"/>}
                >
                    {/*<MenuItem value="">*/}
                    {/*    All*/}
                    {/*</MenuItem>*/}
                    {prices.map((price, index) => (
                        <MenuItem key={index} value={price}>
                            {price}
                        </MenuItem>
                    ))}

                </Select>
            </SelectWrapper>
                <SelectWrapper style={{
                    minWidth: '320px'
                }}>
                    <Label>
                        Car mileage / km
                    </Label>
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
                        onChange={(e) => handleMileAgeInput(e)}
                    />
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
            <MainButton
                style={{
                    width: '136px',
                    height: '48px',
                    marginTop: 'auto'
                }}
                onClick={() => handleSearch(filters.mileage.min, filters.mileage.max)} >Search</MainButton>
            {/*<button onClick={() => handleSearch(filters.mileage.min, filters.mileage.max)}>Search</button>*/}
        </div>
    );
}

export default FilterDropdown;
