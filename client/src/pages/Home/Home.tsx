import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { StyledHome } from "./Home.styled";
import FocusLock from "react-focus-lock";
import { useNavigate } from "react-router-dom";
import { useOnClickOutside, useDisableBodyScroll } from "../../hooks";
import { User, IPodcast, SubsContextType } from "../../models/models";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { SearchBar, Burger, Menu, Podcast, Podcasts } from "../../components";
import { SubsContext } from "../../context/subsContext";

const Search: React.FC = () => {
  const [results, setResults] = useState<any>(false);
  const [trending, setTrending] = useState<any>(false);
  const [subIds, setSubIds] = useState<Array<string>>([]);
  const [subsData, setSubsData] = useState<Array<any>>([]);
  const [show, setShow] = useState<any>(0);
  const [podcast, setPodcast] = useState<Number>(0);
  const [open, setOpen] = useState<Boolean>(false);
  const node = useRef<HTMLInputElement | null>(null);
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);
  const [render, setRender] = useState<Boolean>(false);

  useOnClickOutside(node, () => setOpen(false));
  useDisableBodyScroll(open);
  let navigate = useNavigate();
  const { updateSubs } = useContext(SubsContext) as SubsContextType;

  const parseJSON = (data: Array<string>) => {
    var jsonArray: number[] = [];

    data.forEach((element, index) => {
      const json = JSON.parse(element);
      jsonArray = [...jsonArray, json];
    });
    return jsonArray;
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

  const handleUnsubscribe = async (podcast: IPodcast) => {
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe/cancel`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Unsubscribed"))
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    const getSubs = async () => {
      await axios
        .get(`http://localhost:5000/api/podcast/subscribe`, {
          params: {
            userId: userId,
          },
        })
        .then((res) => {
          const subStr = res.data;
          const json: any = parseJSON(subStr)
          setSubsData(json);
        });
    };

    getSubs();
  }, []);

  useEffect(() => {
   
      //setRender(!render)
      updateSubs(subsData.map(sub => sub.id));

    
  }, [subsData])
  

  useEffect(() => {
    const getTrending = async () => {
      await axios
        .get(`http://localhost:5000/api/podcast/trending`)
        .then((res) => {
          setTrending(res.data.feeds);
        });
    };

    getTrending();
  }, []);
/*
  useEffect(() => {
    setSubsData(parseSubs());
  }, [subIds]);
*/
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
    setShow(1);
  };
  const handleSubs: Function = (id: Number) => {
    navigate("/subs");
    window.location.reload();
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
              setSubs={handleSubs}
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
            {!results && trending && (
              <>
                <h3>Trending Podcasts</h3>
                <Podcasts
                  onClick={handleClick}
                  podcasts={trending}
                  subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
                  unsubscribe={(podcast: IPodcast) => handleUnsubscribe(podcast)}
                />
              </>
            )}
            {results && (
              <Podcasts
                onClick={handleClick}
                podcasts={results}
                subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
                unsubscribe={(podcast: IPodcast) => handleUnsubscribe(podcast)}
               
              />
            )}
          </div>
        </>
      )}
      {show === 1 && <Podcast id={podcast} />}
     
    </StyledHome>
  );
};

export default Search;
