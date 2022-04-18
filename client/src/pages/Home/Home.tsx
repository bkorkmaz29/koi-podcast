import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { StyledHome } from "./Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { User, IPodcast, SubsContextType } from "../../models/models";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { SearchBar, Burger, Menu, Podcast, Podcasts } from "../../components";
import { SubsContext } from "../../context/subsContext";

const Search: React.FC = () => {
  const [results, setResults] = useState<Array<IPodcast> | null>(null);
  const [trending, setTrending] = useState<Array<IPodcast> | null>(null);
  const [subsData, setSubsData] = useState<Array<IPodcast> | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [podcast, setPodcast] = useState<IPodcast | null>(null);

  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);

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
          const json: any = parseJSON(subStr);
          setSubsData(json);
        });
    };

    getSubs();
  }, []);

  useEffect(() => {
    if (subsData) updateSubs(subsData.map((sub) => sub.id));
  }, [subsData]);

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

  const handleClick: Function = (podcast: IPodcast) => {
    setPodcast(podcast);
    setShow(!show);
  };

  return (
    <StyledHome>

    { show && <button className="button-back" onClick={() => setShow(false)}>
            <FontAwesomeIcon size="lg" icon={faArrowAltCircleLeft} />
          </button>}
      {!show && (
        <>
          <div className="search-wrapper">
            <SearchBar onSearch={handleSearch} />        
          </div>
          { !results && trending && <h2>Trending Podcasts</h2>}
          <div className="result-wrapper">
           
            {!results && trending && (
              <div className="podcasts-wrapper">
                <Podcasts
                  onClick={handleClick}
                  podcasts={trending}
                  subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
                  unsubscribe={(podcast: IPodcast) =>
                    handleUnsubscribe(podcast)
                  }
                />
              </div>
            )}
            {results && (
                <div className="podcasts-wrapper">
              <Podcasts
                onClick={handleClick}
                podcasts={results}
                subscribe={(podcast: IPodcast) => handleSubscribe(podcast)}
                unsubscribe={(podcast: IPodcast) => handleUnsubscribe(podcast)}
              />
                </div>
            )}
          </div>
        </>
      )}

      {show && podcast && (
        <div className="podcast-wrapper">
          <Podcast podcast={podcast} />
        </div>
      )}
    </StyledHome>
  );
};

export default Search;
