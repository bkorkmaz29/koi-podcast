import axios from "axios";
import { useState, useEffect } from "react";

import { IPodcast, Episode } from "../../models/models";
import { StyledPodcast } from "./Podcast.styled";
import { Episodes } from "../";

interface IProps {

  id: Number;
}

const Podcast: React.FC<IProps> = ( {id} ) => {
  const [podcast, setPodcast] = useState<IPodcast>();
  const [episodes, setEpisodes] = useState<Array<Episode>>();

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

      const newPodcast: IPodcast = responseInfo.data.feed;
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
    <StyledPodcast>
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
    </StyledPodcast>
  );
};

export default Podcast
