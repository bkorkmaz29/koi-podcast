import { StyledMenu } from "./Menu.styled";
import FocusLock from "react-focus-lock";
interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <FocusLock disabled={!open}>
      <StyledMenu open={open}>
        <div className="button-wrapper">
          <a href="/home"> Home </a>
          <a href="/subs"> My Podcasts </a>
          <a href="/feed"> New Episodes </a>
        </div>
      </StyledMenu>
    </FocusLock>
  );
};

export default Menu;
