import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { StyledHome } from "./Home.styled";

import { User, IPodcast, SubsContextType } from "../../models/models";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { SearchBar, Burger, Menu, Podcast, Podcasts } from "../../components";
import { SubsContext } from "../../context/subsContext";

const Search: React.FC = () => {
  const [results, setResults] = useState<any>(false);
  const [trending, setTrending] = useState<any>(false);
  const [subsData, setSubsData] = useState<Array<any>>([]);
  const [show, setShow] = useState<any>(0);
  const [podcast, setPodcast] = useState<Number>(0);

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
    updateSubs(subsData.map((sub) => sub.id));
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

  const handleClick: Function = (id: Number) => {
    setPodcast(id);
    setShow(1);
  };

  return (
    <StyledHome>
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
                  unsubscribe={(podcast: IPodcast) =>
                    handleUnsubscribe(podcast)
                  }
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
