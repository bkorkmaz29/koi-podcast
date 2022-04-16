import styled from "styled-components";

export const StyledPodcast = styled.div`
  background-color: black;
  position: absolute;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  h1 {
    font-size: 2rem;
    color: #ffd021;
    margin-bottom: 0.1rem;
  }

  h3 {
    margin-top: 0;
    color: #9a9a9a;
    font-size: 0.7rem;
  }

  p {
    font-size: 0.9rem;
  }
  .podcast-card {
    background-color: #171717;
    width: 50%;
    display: flex;
    flex-direction: row;
    border-radius: 9px;
    margin: 1rem;
  }

  .podcast-info {
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    margin: 1rem;
  }

  .img-wrapper {
    border: 1px solid white;
    width: 30%;
    height: 30%;
    margin: 1rem;
  }

  img {
    height: 100%;
    width: 100%;
  }

  a {
    color: #F16323
  }
`;
