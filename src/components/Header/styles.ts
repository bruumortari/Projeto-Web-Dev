import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 50vh;

    .header-container {
        display: flex;
        flex-flow: row nowrap;
        width: 80%;
        height: 100%;

        justify-content: space-around;
        align-items: center;
    }

    .logo {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }

    .title {
        font-size: 2rem;
        color: #FFF;
    }

    .menu {
        width: 60vw;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .button {
        height: 3rem;
    }
`;

export const Content = styled.div`

    .minhaConta {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const Content2 = styled.div`


    .recs {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;

    &:hover {
        filter: brightness(0.9);
    }
}
`

export const Content3 = styled.div`

    .minhaEstante {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;

    &:hover {
        filter: brightness(0.9);
    }
}
`

export const Content4 = styled.div`

    .busca {
        font-size: 1rem;
        color: var(--blue);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;

    &:hover {
        filter: brightness(0.9);
    }
}
`