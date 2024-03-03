import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 60px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    padding-left: 32px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`