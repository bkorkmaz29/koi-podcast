import { StyledHeader, LogoWrapper } from "./Header.styled";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <LogoWrapper>
        <img src={logo} alt="crd" />
        <p>
          &nbsp;<span>P</span>odcast
        </p>
      </LogoWrapper>
    </StyledHeader>
  );
};

export default Header;
