import styled from "styled-components";

export const StyledPodcast = styled.div`
  background-color: ${({ theme }) => theme.black};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .podcast-wrapper {
      background: linear-gradient(to bottom, #ffd021, 5%, #e34427 100%);
      background-color: #f16323;
      width: 100%;
      max-width: 35em;
      margin: auto;
      border-radius: 9px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0.1rem;
      
      -webkit-animation: fadein 1s;
      -moz-animation: fadein 1s;
      -ms-animation: fadein 1s;
      -o-animation: fadein 1s;
      animation: fadein 1s;
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    }
    .podcast-card {
      background-color: ${({ theme }) => theme.grey};
      width: 99%;
      display: flex;
      flex-direction: row;
      border-radius: 9px;
      margin: auto;
      

      @media (min-width: ${({ theme }) => theme.mobile}) {
        font-size: 12px;
      }

      @media (min-width: ${({ theme }) => theme.laptop}) {
        font-size: 16px;
      }

      @media (min-width: ${({ theme }) => theme.desktop}) {
        font-size: 16px;
      }

      h1 {
        font-size: 2em;
        color: ${({ theme }) => theme.mango};
        margin: auto;
      }

      h3 {
        margin-bottom: 1em;
        margin-top: 0;
        color: ${({ theme }) => theme.lightGrey};
        font-size: 1rem;
      }

      p {
        font-size: 0.8em;
        margin: auto;
        padding: 0.7em;
        overflow: hidden;
        color: ${({ theme }) => theme.white};
      }
    }

    .podcast-info {
      width: 65%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
    }

    .img-wrapper {
      width: 35%;
      margin: auto;
      padding: 0.4rem;
    }

    img {
      height: 100%;
      width: 100%;
    }

    a {
      color: ${({ theme }) => theme.red};
      padding: 0.7rem;
    }

    .cat-wrapper {
      display: flex;
      flex-direction: row;
      width: 30%;
      justify-content: center;
      align-items: center;
      margin: auto;

      .category {
        color: ${({ theme }) => theme.orange};
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.orange};
        font-size: 0.8em;
        padding: 0.3em;
        margin: auto;
        border-radius: 9px;
        background: none;
      }
    }
  }
`;
