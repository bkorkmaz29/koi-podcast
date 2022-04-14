import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, ...props }) => {


  return (
    <StyledMenu open={open}  {...props}>
      <a href="/">
       
        Search
      </a>
      <a href="/">
       
        My Podcasts
        </a>
        <a href="/" >
        New Episodes
        
        </a> 
      <a href="/" >
        Settings
        
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
