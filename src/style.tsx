import styled from "styled-components";

export const Container = styled.main`
    padding: 60px 32px;

    .search-container{
        margin-top: 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 900px) {
        padding: 60px 20px;

        .search-container{
            margin-top: 20px;
            flex-direction: column;
        }
    }
`