import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { StyledHome } from "./Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { User, IPodcast, UserContextType } from "../../models/models";
import {
  getCurrentUser,
  getCurrentUserId,
  getHeaders,
} from "../../services/authService";
import { SearchBar, Podcast, Podcasts, Nav } from "../../components";
import { UserContext } from "../../context/userContext";
import { useOnClickOutside, useDisableBodyScroll } from "../../hooks";
//const API_URL = "http://localhost:5000"
const API_URL = "https://koi-podcast.onrender.com/";

const Search: React.FC = () => {
  const node = useRef<any>(null);

  const [results, setResults] = useState<Array<IPodcast> | null>(null);
  const [trending, setTrending] = useState<Array<IPodcast> | null>(null);
  const [subsData, setSubsData] = useState<Array<IPodcast> | null>(null);
  const [show, setShow] = useState<boolean>(false);
  const [podcast, setPodcast] = useState<IPodcast | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<number>(getCurrentUserId()._id);

  const { user, updateSubs } = useContext(UserContext) as UserContextType;

  useOnClickOutside(node, () => setOpen(false));

  const headers = getHeaders();

  let navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId]);

  const parseJSON = (data: Array<string>) => {
    var jsonArray: number[] = [];
    if (data.length > 0) {
      data.forEach((element, index) => {
        const json = JSON.parse(element);
        jsonArray = [...jsonArray, json];
      });
    }
    return jsonArray;
  };

  const handleSubscribe = async (podcast: IPodcast) => {
    await axios
      .post(
        `${API_URL}/api/podcast/subscribe`,
        {
          userId: userId,
          podcast: podcast,
        },
        {
          headers: headers,
        }
      )
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
  };

  const handleUnsubscribe = async (podcast: IPodcast) => {
    await axios
      .post(
        `${API_URL}/api/podcast/subscribe/cancel`,
        {
          userId: userId,
          podcast: podcast,
        },
        {
          headers: headers,
        }
      )
      .then(() => console.log("Unsubscribed"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const getSubs = async () => {
      await axios
        .get(`${API_URL}/api/podcast/subscribe`, {
          headers: headers,
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
        .get(`${API_URL}/api/podcast/trending`, {
          headers: headers,
        })
        .then((res) => {
          setTrending(res.data.feeds);
        });
    };

    getTrending();
  }, []);

  const handleSearch = async (term: String) => {
    await axios
      .get(`${API_URL}/api/podcast/search`, {
        headers: headers,
        params: {
          term: term,
        },
      })
      .then((response) => {
        setResults(response.data.feeds);
      });
  };

  const handleClick = (podcast: IPodcast) => {
    setPodcast(podcast);
    setShow(!show);
  };

  return (
    <StyledHome open={open}>
      <div ref={node} className="nav-wrapper">
        <Nav setOpen={setOpen} open={open} />
      </div>

      {show && (
        <button className="button-back" onClick={() => setShow(false)}>
          <FontAwesomeIcon size="lg" icon={faArrowAltCircleLeft} />
        </button>
      )}
      {!show && (
        <>
          <div className="search-wrapper">
            <SearchBar onSearch={handleSearch} />
          </div>
          {!results && trending && <h2>Trending Podcasts</h2>}
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
                  unsubscribe={(podcast: IPodcast) =>
                    handleUnsubscribe(podcast)
                  }
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
