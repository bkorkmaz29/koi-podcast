import axios from "axios";
import { useState, useEffect } from "react";

import { IPodcast, Episode } from "../../models/models";
import { StyledPodcast } from "./Podcast.styled";
import { Episodes, PodcastCard } from "../";

interface IProps {
  podcast: IPodcast;
}

const Podcast: React.FC<IProps> = ({ podcast}) => {
  const [episodes, setEpisodes] = useState<Array<Episode>>();

  useEffect(() => {
    const fetchData = async () => {
      /*
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
        */

      const responseEpisodes = await axios(
        `http://localhost:5000/api/podcast/episodes`,
        {
          params: {
            id: podcast.id,
          },
        }
      );

      setEpisodes(responseEpisodes.data.items);
    };

    fetchData();
  }, [podcast.id]);

 
  return (
    <StyledPodcast>
      {podcast && (
        <div className="podcast-wrapper">
          <div className="podcast-card">
            <div className="img-wrapper">
              <img src={podcast.image} alt="Podcast" />
            </div>
            <div className="podcast-info">
              <h1>{podcast.title} </h1>
              <h3>by {podcast.author}</h3>
              <div className="cat-wrapper">
                {Object.values(podcast.categories).map((category, index) => (
                  <div key={index} className="category">
                    {category}
                  </div>
                ))}
              </div>
              <p> {podcast.description}</p>
            
      
            </div>
   
          </div>
        </div>
      )}

      {episodes && <Episodes episodes={episodes} />}
    </StyledPodcast>
  );
};

export default Podcast;
