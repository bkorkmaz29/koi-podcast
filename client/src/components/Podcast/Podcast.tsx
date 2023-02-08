import axios from "axios";
import { useState, useEffect } from "react";
import { getHeaders } from "../../services/authService";
import { IPodcast, Episode } from "../../models/models";
import { StyledPodcast } from "./Podcast.styled";
import { Episodes, PodcastCard } from "../";

interface IProps {
  podcast: IPodcast;
}

const Podcast: React.FC<IProps> = ({ podcast }) => {
  const [episodes, setEpisodes] = useState<Array<Episode>>();

  const headers = getHeaders();

  useEffect(() => {
    const fetchData = async () => {
      const responseEpisodes = await axios(
        `https://koi-podcast.onrender.com/api/podcast/episodes`,
        {
          headers: headers,
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
        <div className="container">
          <div className="podcast-wrapper">
            <div className="podcast-card">
              <div className="img-wrapper">
                <img src={podcast.image} alt="Podcast" />
              </div>
              <div className="podcast-info">
                <h1>{podcast.title} </h1>
                <h3>by {podcast.author}</h3>
                <div className="cat-wrapper">
                  {Object.values(podcast.categories)
                    .slice(0, 3)
                    .map((category, index) => (
                      <div key={index} className="category">
                        {category}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="episodes-wrapper">
            {episodes && <Episodes episodes={episodes} />}
          </div>
        </div>
      )}
    </StyledPodcast>
  );
};

export default Podcast;
