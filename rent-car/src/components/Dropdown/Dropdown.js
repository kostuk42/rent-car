import React from "react";
import {FormControl} from "@mui/material";
import makeStyles from "@mui/system";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import  styled  from "@emotion/styled";

const FormControlWrapper = styled(FormControl)`
  & .MuiInputBase-root {
    color: #6EC177;
    border-color: #6EC177;
    border-width: 1px;
    border-style: solid;
    border-radius: 100px;
    min-width: 120px;
    justify-content: center;
  }
  & .MuiSelect-select.MuiSelect-select {
    padding-right: 0px;
  }
`;

const SelectWrapper = styled(Select)`
  width: auto;
  font-size: 12px;
  &:focus {
    background-color: transparent;
  }
`;

const SelectIcon = styled(KeyboardArrowDownIcon)`
  position: relative;
  color: #6EC177;
  font-size: 14px;
`;

const MenuProps = {
    classes: {
        list: {
                paddingTop: 0,
                paddingBottom: 0,
            '& li': {
    fontWeight: 200,
        paddingTop: 8,
        paddingBottom: 8,
        fontSize: "12px",
},
'& li.Mui-selected': {
    color: "white",
        background: "#6EC177",
},
'& li.Mui-selected:hover': {
    background: "#6EC177",
},
},
paper: {
    borderRadius: 12,
        marginTop: 8,
},
},
anchorOrigin: {
    vertical: "bottom",
        horizontal: "center",
},
transformOrigin: {
    vertical: "top",
        horizontal: "center",
},
getContentAnchorEl: null,
};

const DropDown = ({ value, handleChange, items }) => {
    return (
        <FormControlWrapper >
            <SelectWrapper
                value={value}
                onChange={handleChange}
                disableUnderline
                IconComponent={SelectIcon}
                MenuProps={MenuProps}
            >
                {items.map((item) => (
                    <MenuItem key={item.key} value={item.value}>
                        {item.key}
                    </MenuItem>
                ))}
            </SelectWrapper>
        </FormControlWrapper>
    );
};

export default DropDown;
