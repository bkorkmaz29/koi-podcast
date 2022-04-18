import { StyledCard } from "./PodcastCard.styled";
import { Info } from "..";
import { Podcast } from "../../models/models";
import { SubsContext } from "../../context/subsContext";
import { useContext, useEffect, useState } from "react";

const PodcastCard = ({ podcast, onClick, subscribe, unsubscribe }) => {
  const { subs, saveSub, deleteSub } = useContext(SubsContext);
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
    const bool = checkSub(subs);
    setSubbed(bool);
  }, [subs]);

  const handleClick = () => {
    onClick(podcast.id);
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
      <div className="img-wrapper">
        {!podcast.image && <img src={podcast.artwork} alt="Podcast" />}

        {podcast.image && <img src={podcast.image} alt="Podcast" />}
      </div>
      <div className="info-wrapper">
        <h1>{podcast.title}</h1>
        <h3>by {podcast.author} </h3>
        <div className="buttons-wrapper">
          <button onClick={handleClick}> listen </button>
          {!subbed ? (
            <button onClick={handleSubscribe}> subscribe </button>
          ) : (
            <button onClick={handleUnsubscribe}> unsubscribe </button>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

export default PodcastCard;
