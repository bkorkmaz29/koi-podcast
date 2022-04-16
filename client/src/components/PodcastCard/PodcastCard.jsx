import { StyledCard } from "./PodcastCard.styled";
import { Info } from "..";
import { Podcast } from '../../models/models'

const PodcastCard = ({ podcast, onClick, subscribe }) => {

  const handleClick = () => {
    onClick(podcast.id);
  }

  const handleSubscribe = () => {
    subscribe(podcast.id.toString());
  }

  return (
    <StyledCard>
      <div className="img-wrapper">
        <img src={podcast.image} alt="Podcast" />
      </div>
      <Info
        podName={podcast.title}
        producer={podcast.ownerName}
        language={podcast.language}
        description={podcast.description}
        
      />
     
      <button  onClick={handleClick}> go to page </button>
      <button onClick={handleSubscribe}> subscribe </button>
    </StyledCard>
  );
};

export default PodcastCard;
