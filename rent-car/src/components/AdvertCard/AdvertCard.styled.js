import styled from '@emotion/styled';

export const Wrapper = styled.div`
    position: relative;
    width: 274px;
    height: 426px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Image = styled.img`
    width: 100%;
    height: 268px;
    object-fit :cover;
    border-radius: 14px;
    background-color: #F3F3F2;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #121417;
`
export const BlueSpan = styled.span`
    color: #3470FF;
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`
export const Item = styled.li`
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    color: #12141780;
    border-right: 1px solid #1214171A;
`
export const MainButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    width: 100%;
    min-height: 48px;
    background: #3470FF;
    border-radius: 12px;
    border: none;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    &:hover {
    background: #0B44CD;
    }
`
