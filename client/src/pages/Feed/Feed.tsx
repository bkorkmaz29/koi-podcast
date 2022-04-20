import logo from "../../assets/logo.png";
import { StyledFeed } from "./Feed.styled";

const Feed: React.FC = () => {
  return (
    <StyledFeed>
      <div className="wip">
        <h1>Work in progress</h1>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </StyledFeed>
  );
};

export default Feed;
