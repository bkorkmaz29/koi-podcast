import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import logo from "../../assets/logo.png";

const Burger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
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
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
