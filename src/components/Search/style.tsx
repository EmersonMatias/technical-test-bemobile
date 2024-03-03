import styled from "styled-components";

export const Container = styled.div`
    width: 290px;
    background-color: ${props => props.theme.colors.white};
    padding: 12px 16px;
    border-radius: 8px;
    border: solid 1px ${props => props.theme.colors.gray10};
    display: flex;
    justify-content: space-between;

    input{
        border: none;

        &::placeholder{
            font-size: 16px;
            color: ${props => props.theme.colors.gray20};
        }
    }

    @media screen and (max-width: 900px){
        margin-top: 28px;
    }

    @media screen and (max-width: 500px){
        width: 100%;
    }

`

