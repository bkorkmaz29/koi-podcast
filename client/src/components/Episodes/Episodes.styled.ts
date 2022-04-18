import styled from "styled-components";

export const StyledEpisodes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: auto;

  .info {
    margin: auto;
    background-color: #171717;
    width: 100%;
    h1 {
      font-size: 0.8rem;
      color: ${({ theme }) => theme.mango};
    }

    p {
      font-size: 0.6rem;
      color: ${({ theme }) => theme.lightGrey};
    }
  }

  .player {
    color: ${({ theme }) => theme.grey};
    margin: auto;
  }
`;

export const StyledEpisodeCard = styled.div`
  border-radius: 9px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.grey};
  width: 100%;
  height: 8rem;
  padding: 1rem;
`;
