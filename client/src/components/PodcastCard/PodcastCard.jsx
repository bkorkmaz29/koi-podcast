import { StyledCard } from "./PodcastCard.styled";
import { Info } from "..";
import { Podcast } from '../../models/models'


const PodcastCard = ({ podcast, onClick, subscribe }) => {

  const handleClick = () => {
    onClick(podcast.id);
  }

  const handleSubscribe = () => {
    subscribe(podcast);
  }

  return (
    <StyledCard>
      <div className="img-wrapper">
        {!podcast.image && <img src={podcast.artwork} alt="Podcast" />}

        {podcast.image && 
        <img src={podcast.image} alt="Podcast" />}

      </div>
      <div className="info-wrapper">
      <h1>{podcast.title}</h1>
      <h3>by {podcast.author} </h3>
      <div className="buttons-wrapper">
      <button  onClick={handleClick}> listen </button>
      <button onClick={handleSubscribe}> subscribe </button>
      </div>
      </div>
    
    </StyledCard>
  );
};

export default PodcastCard;
