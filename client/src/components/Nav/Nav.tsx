import FocusLock from "react-focus-lock";

import { Burger, Menu } from "../";
import { useDisableBodyScroll } from "../../hooks";

interface Props {
  setOpen: any;
  open: boolean;
}

const Nav: React.FC<Props> = ({ setOpen, open }) => {
  useDisableBodyScroll(open);

  return (
    <div>
      <FocusLock disabled={!open}>
        <div className="burger">
          <Burger open={open} setOpen={setOpen} />
        </div>
        <div className="menu">
          <Menu open={open} />
        </div>
      </FocusLock>
    </div>
  );
};

export default Nav;
