import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setSubs, setNew, setHome, setOpen }) => {


  return (
    <StyledMenu open={open} setOpen={setOpen} setSubs={setSubs}>
      <button onClick={setHome}> Search </button>
      <button onClick={setSubs}> My Podcasts </button>
      <button onClick={setNew}> New Episodes </button>
    </StyledMenu>
  )
}



export default Menu;
