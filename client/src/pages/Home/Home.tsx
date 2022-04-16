import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Podcasts, Subscriptions } from "../../components";
import { StyledHome } from "./Home.styled";
import FocusLock from "react-focus-lock";

import { useOnClickOutside, useDisableBodyScroll } from "../../hooks";
import { User, IPodcast } from "../../models/models";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { SearchBar, Header, Burger, Menu, Podcast } from "../../components";

const Search: React.FC = () => {
  const [found, setFound] = useState<Boolean>(false);
  const [results, setResults] = useState<any>(false);
  const [subIds, setSubIds] = useState<Array<String>>([]);

  const [show, setShow] = useState<any>(0);
  const [podcast, setPodcast] = useState<Number>(0);
  const [open, setOpen] = useState<Boolean>(false);
  const node = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<User | null>(getCurrentUser());
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);

  useOnClickOutside(node, () => setOpen(false));
  useDisableBodyScroll(open);

  useEffect(() => {
    
    getSubIds();
  }, [userId])
  


  const getSubIds = async () => {

    await axios
      .get(`http://localhost:5000/api/podcast/subscribe`, {
        params: {
          userId: userId,
        },
      })
      .then((response) => {
       setSubIds(response.data);
      });
  };

  const handleSubscribe = async (id: String) => {
    console.log(id);
    console.log(userId);
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe`, {
        userId: userId,
        id: id,
      })
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
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
    console.log(results);
  };

  const handleClick: Function = (id: Number) => {
    setPodcast(id);
    setShow(1)
  };


  return (
    <StyledHome>
      <Header />
      <div className="nav" ref={node}>
        <FocusLock disabled={!open}>
          <div className="burger">
            <Burger open={open} setOpen={setOpen} />
          </div>
          <div className="menu">
            <Menu
              open={open}
              setOpen={setOpen}
              setHome={() => setShow(0)}
              setSubs={() => setShow(2)}
              setNew={() => setShow(3)}
            />
          </div>
        </FocusLock>
      </div>
      {show === 0 && (
        <>
          <div className="search-wrapper">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="result-wrapper">
            {found && (
              <Podcasts
                onClick={handleClick}
                podcasts={results}
                subscribe={(id: String) => handleSubscribe(id)}
              />
            )}
          </div>
        </>
      )}
      {show === 1 && <Podcast id={podcast} />}
      {show === 2 && ( 
        <Subscriptions subIds={subIds} onSubscribe={handleSubscribe} onClick={handleClick}/>
      )}
    </StyledHome>
  );
};

export default Search;
