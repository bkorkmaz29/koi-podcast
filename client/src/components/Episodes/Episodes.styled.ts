import styled from "styled-components";

interface Props {
  readonly listen: boolean;
}

export const StyledEpisodes = styled.div`
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 35em;
`;

export const StyledEpisodeCard = styled.div<Props>`
  border-radius: 9px;
  margin: 0.8em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey};
  width: 100%;
  height: ${({ listen }) => (listen ? "12em" : "7em")};
  padding: 1em;

  .listen-button {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.red};

    &:hover {
      opacity: 0.5;
    }
  }

  .info {
    background-color: #171717;
    width: 100%;

    h1 {
      font-size: 0.8em;
      color: ${({ theme }) => theme.mango};
    }

    p {
      font-size: 0.6em;
      color: ${({ theme }) => theme.lightGrey};
    }
  }

  .player {
    color: ${({ theme }) => theme.grey};
    margin: auto;
  }
`;
