import styled from "styled-components";

export const StyledInfo = styled.div`
  display: flex;
  margin: 0.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Verdana";
  font-weight: bold;
  max-width: 80%;

  background-color: #171717;

  h1 {
    font-size: 1rem;
    color: #ffd021;
  }

  h2 {
    font-size: 0.75rem;
    color: #9a9a9a;
  }

  p {
    font-size: 0.7rem;
    font-style: italic;
  }

  .links {
    width: 50%;
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
  }

  a {
    font-size: 0.75rem;
    margin: auto;
    color: red;
  }
`;
