import { StyledMenu } from "./Menu.styled";

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="button-wrapper">
        <a href="/home"> Home </a>
        <a href="/subs"> My Podcasts </a>
        <a href="/feed"> New Episodes </a>
      </div>
    </StyledMenu>
  );
};

export default Menu;
