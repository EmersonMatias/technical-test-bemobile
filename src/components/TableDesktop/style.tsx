import styled from "styled-components";

export const Container = styled.section`
    overflow: hidden;
    border-radius: 8px 8px 0 0; 
    width: 100%;
    margin-top: 32px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    table{
        width: 100%;
        border-collapse: separate; 
        border-spacing: 0 2px;
    }

    th{
        padding: 0 32px;
        height: 47px;
        font-size: 16px;
        font-weight: 500;
        text-align: left;
        vertical-align: middle;
        background: linear-gradient(180deg, #5A84C0, #594ED2);
        color: ${props => props.theme.colors.white};
    }

    td{
        padding: 0 32px;
        height: 49px;
        font-size: 16px;
        font-weight: 400;
        vertical-align: middle;
        background-color: ${props => props.theme.colors.white};

        img{
            width: 34px;
            height: 34px;
            border-radius: 100%;
        }
    }
 
    @media screen and (max-width: 900px) {
        margin-top: 0px;

        table{
            display: none;
        }
      
    }
`