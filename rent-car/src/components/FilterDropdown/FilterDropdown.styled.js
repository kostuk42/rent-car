import styled from "@emotion/styled";
import {Paper} from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputBase from '@mui/material/InputBase';

export const FilterStyled = styled.div`
    display: flex;
    width: 859px;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 20px;
`
export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    color: #8A8A89;
    display: block;
    margin-bottom: 8px;
`

export const SelectWrapper = styled.div`
    height: 74px;
    gap: 8px;
`

export const Select = styled.select`
    color: #121417;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    width: 224px;
    height: 48px;
    padding: 14px;
    border-radius: 14px;
    gap: 32px;
    background: #F7F7FB;
`
export const ChevronAutocomplete = styled(KeyboardArrowDownIcon)`
    position: absolute;
    right: 14px;
    top: 14px;
    color: #121417;
    pointer-events: none;
`

export const ChevronSelect = styled(KeyboardArrowDownIcon)`
    position: absolute;
    right: 14px;
    top: 0px;
    color: #121417!important;
    pointer-events: none;
    transparency: 1;
`

export const StyledPaper = styled(Paper)`
    border-radius: 14px;
    border: 1px solid #1214170D;
`
export const StyledOption = styled('div')`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #12141733;
`
export const StyledLi = styled('li')`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    background: 'red!important';
    color: #12141733;
`

export const StyledInput = styled(InputBase)`
width: 125px;
height: 48px;
padding: 18px 14px 14px 14px;
border-radius: 14px;
background: #F7F7FB;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
color: #121417;
 input::placeholder {
    color: #121417!important;
    opacity: 1;
  }
`
export const StyledMileFromInput = styled(InputBase)`
width: 160px;
height: 48px;
padding: 18px 14px 14px 14px;
border-top-left-radius: 14px;
border-bottom-left-radius: 14px;
border-right: 1px solid #1214170D;
background: #F7F7FB;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
color: #121417;
`

export const StyledMileToInput = styled(InputBase)`
width: 160px;
height: 48px;
padding: 18px 14px 14px 14px;
border-top-right-radius: 14px;
border-bottom-right-radius: 14px;
border-left: 1px solid #1214170D;
background: #F7F7FB;
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
color: #121417;
 input::placeholder {
    color: #121417!important;
    opacity: 1;
  }
`

export const AutocompleteStyles = {
    display: 'inline-block',
    '& input': {
        width: 196,
        height: 20,
        color: '#121417',
        border: 'none',
        fontSize: 18,
        fontWeight: 500,
        lineHeight: 20,
        letterSpacing: 0,
        padding: '14px',
        borderRadius: '14px',
        backgroundColor: '#F7F7FB',
    },
    '& input:focus': {
        border: 'none',
        outline: 'none',
        backgroundColor: '#F7F7FB'
    },
    '& input::placeholder': {
        color: '#121417'
    }
}

export const InputAdornmentStyles = {
    '& .MuiTypography-root': {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: '0em',
        color: '#121417'
    }
}

export const selectPriceStyles = {
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

export const FilterWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 18px;
    min-width: 859px;
`
