import styled from 'styled-components';

export const Container = styled.form`

    .logIn {
        color: var(--texte-title);
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .cadastrar {
        color: var(--texte-title);
        font-size: 1.5rem;
        margin-top: 1rem;
    }

    h3 {
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;
        background: #e7e9ee;
        font-wight: 400;
        font-size: 1rem;
        margin-bottom: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--blue);
        color: #FFF;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;