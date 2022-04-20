import styled from "styled-components";

export const StyledCard = styled.div`
  -webkit-animation: fadein 2s;
  -moz-animation: fadein 2s;
  -ms-animation: fadein 2s;
  -o-animation: fadein 2s;
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  background: linear-gradient(to bottom, #ffd021 5%, #e34427 100%);
  background-color: #f16323;

  min-height: 100px;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.1em;

  @media (min-width: ${({ theme }) => theme.smobile}) {
    width: 20em;
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    width: 22em;
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: 23em;
  }

  @media (min-width: ${({ theme }) => theme.laptop}) {
    width: 24em;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 25em;
  }

  .card-wrapper {
    background-color: ${({ theme }) => theme.grey};
    width: 99%;

    display: flex;
    flex-direction: row;
    border-radius: 9px;
    margin: auto;
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    margin: auto;
    width: 80%;
    min-height: 150px;
    min-width: 200px;

    h1 {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.mango};
      min-width: 0;
      margin-bottom: 0;
      margin: auto;
      padding: 2px;
    }

    h3 {
      font-size: 0.6rem;
      color: ${({ theme }) => theme.lightGrey};
      min-width: 0;
      margin-top: 0;
    }
  }

  .cat-wrapper {
    display: flex;
    flex-direction: row;
    width: 30%;
    justify-content: center;
    margin: auto;

    .category {
      background-color: ${({ theme }) => theme.orange};
      font-weight: bold;
      font-size: 0.7rem;
      padding: 0.2rem;
      margin: auto;
      border-radius: 9px;
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4rem;
    width: 60%;
    min-height: 60%;
    min-width: 150px;
    margin: auto;
    min-width: 0;
    img {
      width: 100%;
      height: 100%;
      min-width: 0;
    }
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    padding: 0.5rem;
    width: 100%;
  }

  button {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.white};
    background: none;
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.red};
    display: inline-block;
    cursor: pointer;

    padding: 7px 16px;
    text-shadow: 0px 1px 0px #3d768a;
    margin-bottom: 0.3rem;

    &:hover {
      transition: all 0.3s linear;
      background: ${({ theme }) => theme.red};
      color: ${({ theme }) => theme.white};
    }
  }
`;
