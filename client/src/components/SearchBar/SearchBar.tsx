import {
  StyledSearchBar,
} from "./SearchBar.styled";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
interface Props {
  onSearch: Function;
}


const SearchBar: React.FC<Props> = ({onSearch}) => {
  const [term, setTerm] = useState<String>("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
   
    onSearch(term);
  
  }



  return (
    <StyledSearchBar onSubmit={onSubmit} >
      <input type="text" name="q" placeholder="Search podcasts..." onChange={(e) => setTerm(e.target.value)} />
      <input className="submit-button" type="submit" value="Search" />
    </StyledSearchBar>
  );
};

export default SearchBar;
