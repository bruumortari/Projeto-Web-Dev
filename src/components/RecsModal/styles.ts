import styled from 'styled-components';

export const Container = styled.form`
display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;

    img {
        border: 3px solid var(--blue);
        border-radius: 5%;
        &:hover {
            filter: brightness(0.9);
    }
`;