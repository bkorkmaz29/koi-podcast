import {
  StyledSearchBar,
  StyledTextBox,
  StyledSearchButton,
} from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledTextBox placeholder="Search podcasts..." />
      <StyledSearchButton>
        <FaSearch size={36} color={"black"} />
      </StyledSearchButton>
    </StyledSearchBar>
  );
};

export default SearchBar;
