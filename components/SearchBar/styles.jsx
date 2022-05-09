import styled from "styled-components";

export const Input = styled.div`
    margin-bottom: 64px;
    display: flex;
    align-items: center;
    width: 300px;

    input{
        background-color: #000d20;
        color: #e2e2e2;
        border: none;
        padding: 16px;
        border-radius: 4px;
        outline: none;
        height: 100%;
        width: 100%;

        ::placeholder{
            color: #e2e2e2;
        }
    }
`