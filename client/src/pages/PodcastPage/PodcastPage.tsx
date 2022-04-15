import axios from "axios";
import { useState, useEffect } from "react";
import { Podcast, Episode } from "../../models/models";
import { useLocation } from "react-router-dom";

import { StyledPodcastPage } from "./PodcastPage.styled";
import { Episodes } from "../../components";

type LocationState = {
  id: {
    path: String;
  };
};

const PodcastPage: React.FC = () => {
  const [podcast, setPodcast] = useState<Podcast>();
  const [episodes, setEpisodes] = useState<Array<Episode>>();
  const location = useLocation();

  const { id } = location.state as LocationState;

  useEffect(() => {
    const fetchData = async () => {
      const responseInfo = await axios(
        `http://localhost:5000/api/podcast/byid`,
        {
          params: {
            id: id,
          },
        }
      );

      const newPodcast: Podcast = responseInfo.data.feed;
      setPodcast(newPodcast);

      const responseEpisodes = await axios(
        `http://localhost:5000/api/podcast/episodes`,
        {
          params: {
            id: id,
          },
        }
      );

      setEpisodes(responseEpisodes.data.items);
    };

    fetchData();
  }, [id]);

  return (
    <StyledPodcastPage>
      {podcast && (
        <div className="podcast-card">
          <div className="img-wrapper">
            <img src={podcast.image} alt="Podcast" />
          </div>
          <div className="podcast-info">
            <h1>{podcast.title}</h1>
            <h3>by {podcast.ownerName}</h3>
            <p>{podcast.description}</p>
            <a href={podcast.link}>Website</a>
          </div>
        </div>
      )}
      {episodes && <Episodes episodes={episodes} />}
    </StyledPodcastPage>
  );
};

export default PodcastPage;
