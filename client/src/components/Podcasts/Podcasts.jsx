import { StyledPodcasts } from "./Podcasts.styled";
import { PodcastCard } from "..";

const Podcasts = ({ podcasts, onClick, subscribe, unsubscribe }) => {
  return (
    <StyledPodcasts>
      {podcasts.map((podcast) => (
        <PodcastCard
          key={podcast.id}
          podcast={podcast}
          onClick={onClick}
          subscribe={subscribe}
          unsubscribe={unsubscribe}
        />
      ))}
    </StyledPodcasts>
  );
};

export default Podcasts;
