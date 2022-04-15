import { useState } from "react";
import axios from "axios";
import { Podcasts } from "../../components";
import { SearchContainer } from "./Search.styled";
import { useNavigate } from "react-router-dom";


import SearchBar from "../../components/SearchBar/SearchBar";

const Search: React.FC = () => {
  const [found, setFound] = useState<Boolean>(false);
  const [results, setResults] = useState<any>();
  
  let navigate = useNavigate();

  const routeChange = (id: Number) => {
    let path = "/podcastpage";
    navigate(path, { state: { id: id } });
  };


  const handleSearch = async (term: String) => {
    console.log(term);

    await axios
      .get(`http://localhost:5000/api/podcast/search`, {
        params: {
          term: term,
        },
      })
      .then((response) => {
        setResults(response.data.feeds);
        setFound(response.data.status);
      });
    //.then((response) => {console.log(response.data.feeds)})

    console.log(results);
  };


  const handleClick: Function = (id: Number) => {
    console.log(id);
    routeChange(id);
  }


  return (
    <SearchContainer>
      <div className="search-wrapper">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="result-wrapper">
        {found && <Podcasts onClick={handleClick} podcasts={results} />}
      </div>
    </SearchContainer>
  );
};

export default Search;
