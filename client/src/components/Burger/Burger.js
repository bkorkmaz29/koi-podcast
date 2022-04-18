import { StyledBurger } from "./Burger.styled";
import logo from "../../assets/logo.png";

const Burger = ({ open, setOpen }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div className="burger">
        <span />
        <span />
        <span />
      </div>
      <div className="logo-wrapper">
        <img src={logo} alt="crd" />
        <p>
          <span>P</span>odcast
        </p>
      </div>
    </StyledBurger>
  );
};

export default Burger;
