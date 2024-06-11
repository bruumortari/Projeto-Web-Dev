import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;

    h2 {
        margin-bottom: 1rem;
        color: var(--blue);
        border: 2px solid #FFF;
        background-color: #FFF;
        border-radius: 0.25rem;
    }

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            padding: 1rem 2rem;
            text-align: center;
            line-height: 1.5rem;
            color: var(--blue);
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--blue-light);
            text-align: center;
            color: #646D7E;
            border-radius: 0.25rem;
        }
    }
`;
