import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
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
