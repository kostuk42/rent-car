import React from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import './AutocompleteInput.css';

export const AutocompleteInput = (params) => {
    return (
        <div ref={params.InputProps.ref} className="input-container">
            <input type="text"
                   placeholder="Search"
                   {...params.inputProps}/>
            <KeyboardArrowDownIcon className="arrow-down"/>
        </div>
    );
};

export default AutocompleteInput;
