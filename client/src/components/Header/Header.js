import { StyledHeader, LogoWrapper } from "./Header.styled";
import logo from "../../constants/data";

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <img src={logo.image} alt="crd" />
        <p>
          &nbsp;<span>P</span>odcast
        </p>
      </LogoWrapper>
    </StyledHeader>
  );
};

export default Header;
