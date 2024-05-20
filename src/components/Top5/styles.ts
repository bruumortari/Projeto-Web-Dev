import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin-top: -8rem;
    margin-left: -0.8rem;

    div {
        background: var(--shape);
        padding: 2.5rem 4rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        
        strong {
            font-size: 1rem;
            font-weight: normal;
        }

        p {
            font-weight: bold;
            color: var(--blue);
            padding: 0 0.72rem;
            margin-bottom: 20px;
            border: 2px solid var(--blue-light);
            border-radius: 0.25rem;
        }
    }
`;
