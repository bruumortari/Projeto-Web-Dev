import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .minhaConta {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .title {
        font-size: 2rem;
        color: #FFF;
        margin-left: -47rem;
        width: auto;
    }
`;

export const Content2 = styled.div`
    display: flex;
    align-items: center;

    .recs {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        margin-left: 42.5rem;
        margin-top: -28.5rem;

    &:hover {
        filter: brightness(0.9);
    }
}
`

export const Content3 = styled.div`
    display: flex;
    align-items: center;

    .minhaEstante {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        margin-left: 22rem;
        margin-top: -28.5rem;

    &:hover {
        filter: brightness(0.9);
    }
}
`




