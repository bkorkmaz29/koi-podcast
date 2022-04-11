import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-basis: 2;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: #171717;
  border-bottom: 2px solid #ffd021;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 75px;
  font-family: "Major Mono Display", monospace;
  font-weight: bold;
  font-size: 28px;

  img {
    max-width: 100%;
    height: auto;
  }

  span {
    color: #f3430c;
  }
`;
