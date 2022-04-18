import { StyledCard } from "./PodcastCard.styled";
import { Info } from "..";
import { IPodcast, SubsContextType } from "../../models/models";
import { SubsContext } from "../../context/subsContext";
import { useContext, useEffect, useState } from "react";

interface Props {
  podcast: IPodcast;
  onClick: Function;
  subscribe: Function;
  unsubscribe: Function;
}

const PodcastCard: React.FC<Props> = ({
  podcast,
  onClick,
  subscribe,
  unsubscribe,
}) => {
  const { subs, saveSub, deleteSub } = useContext(
    SubsContext
  ) as SubsContextType;
  const [subbed, setSubbed] = useState(false);

  const checkSub = () => {
    if (subs) {
      if (subs.includes(podcast.id)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  useEffect(() => {
    const bool = checkSub();
    setSubbed(bool);
  }, [subs]);

  const handleClick = () => {
    onClick(podcast);
  };

  const handleSubscribe = () => {
    saveSub(podcast.id);
    subscribe(podcast);
  };

  const handleUnsubscribe = () => {
    deleteSub(podcast.id);
    unsubscribe(podcast);
  };

  return (
    <StyledCard>
      <div className="card-wrapper">
        <div className="img-wrapper">
          {podcast.image && <img src={podcast.image} alt="Podcast" />}
        </div>
        <div className="info-wrapper">
          <h1>{podcast.title}</h1>
          <h3>by {podcast.author} </h3>
          <div className="cat-wrapper">
            {Object.values(podcast.categories).map((category, index) => (
              <div key={index} className="category">
                {category}
              </div>
            ))}
          </div>
          <div className="buttons-wrapper">
            <button onClick={handleClick}> listen </button>
            {!subbed ? (
              <button onClick={handleSubscribe}> subscribe </button>
            ) : (
              <button onClick={handleUnsubscribe}> unsubscribe </button>
            )}
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default PodcastCard;
