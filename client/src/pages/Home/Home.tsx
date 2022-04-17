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
  const [results, setResults] = useState<any>(false);
  const [trending, setTrending] = useState<any>(false);
  const [subIds, setSubIds] = useState<Array<string>>([]);

  const [show, setShow] = useState<any>(0);
  const [podcast, setPodcast] = useState<Number>(0);
  const [open, setOpen] = useState<Boolean>(false);
  const node = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<User | null>(getCurrentUser());
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);

  useOnClickOutside(node, () => setOpen(false));
  useDisableBodyScroll(open);

  

  const getSubIds = async () => {

    await axios
      .get(`http://localhost:5000/api/podcast/subscribe`, {
        params: {
          userId: userId,
        },
      })
      .then((res) => {
        const subStr = res.data;
        
        setSubIds(subStr);
   
      });
  };

  const getTrending = async () => {

    await axios
      .get(`http://localhost:5000/api/podcast/trending`)
      .then((res) => { setTrending(res.data.feeds); });
  };




  const handleSubscribe = async (podcast: IPodcast) => {
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    
    getSubIds();
  }, [handleSubscribe])
  

  
  useEffect(() => {
    
    getTrending();
  }, [])

  const handleSearch = async (term: String) => {
    await axios
      .get(`http://localhost:5000/api/podcast/search`, {
        params: {
          term: term,
        },
      })
      .then((response) => {
        setResults(response.data.feeds);
      });
  };

  const handleClick: Function = (id: Number) => {
    setPodcast(id);
    setShow(1)
  };


  return (
    <StyledHome>
  
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
          {!results && trending && 
          <>
          <h3>Trending Podcasts</h3>
            <Podcasts
            onClick={handleClick}
            podcasts={trending}
            subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
          />
          </>
            }
            {results && (
              <Podcasts
                onClick={handleClick}
                podcasts={results}
                subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
              />
            )}
          </div>
        </>
      )}
      {show === 1 && <Podcast id={podcast} />}
      {show === 2 && ( 
        <Subscriptions subs={subIds} onSubscribe={handleSubscribe} onClick={handleClick}/>
      )}
    </StyledHome>
  );
};

export default Search;
