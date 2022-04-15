import { StyledCard } from "./PodcastCard.styled";
import { Info } from "..";
import { Podcast } from '../../models/models'

const PodcastCard = ({ podcast, onClick }) => {

  const handleClick = () => {
    onClick(podcast.id);
  }

  return (
    <StyledCard onClick={handleClick}>
      <div className="img-wrapper">
        <img src={podcast.image} alt="Podcast" />
      </div>
      <Info
        podName={podcast.title}
        producer={podcast.ownerName}
        language={podcast.language}
        description={podcast.description}
        listen={podcast.url}
        website={podcast.link}
      />
    </StyledCard>
  );
};

export default PodcastCard;
