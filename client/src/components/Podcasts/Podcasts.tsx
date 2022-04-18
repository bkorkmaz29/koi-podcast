import { StyledPodcasts } from "./Podcasts.styled";
import { PodcastCard } from "..";
import { IPodcast } from "../../models/models";

interface Props {

  podcasts: Array<IPodcast>,
  onClick: Function,
  subscribe: Function,
  unsubscribe: Function,

}

const Podcasts: React.FC<Props>= ({ podcasts, onClick, subscribe, unsubscribe }) => {
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
