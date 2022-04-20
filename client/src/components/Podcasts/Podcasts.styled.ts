import styled from "styled-components";

export const StyledPodcasts = styled.div`
  display: grid;
  margin: auto;
  width: 100%;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.smobile}) {
    grid-template-columns: auto;
    column-gap: 0;
    row-gap: 1em;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: auto;
    column-gap: 0;
    row-gap: 1em;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: auto auto;
    column-gap: 1em;
    row-gap: 2em;
  }

  @media (min-width: ${({ theme }) => theme.laptop}) {
    grid-template-columns: auto auto;
    column-gap: 2em;
    row-gap: 2em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    grid-template-columns: auto auto auto;
    column-gap: 3em;
    row-gap: 2em;
  }
`;
