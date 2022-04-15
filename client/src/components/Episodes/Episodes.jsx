import { StyledEpisodes, StyledEpisodeCard } from "./Episodes.styled";
import ReactAudioPlayer from "react-audio-player";

const EpisodeCard = ({ episode }) => {
  return (
    <StyledEpisodeCard>
      <div className="info">
        <h1>{episode.title}</h1>
        <p>{episode.datePublishedPretty}</p>
      </div>

      <div className="player">
        <ReactAudioPlayer src={episode.enclosureUrl} controls />
      </div>
    </StyledEpisodeCard>
  );
};

const Episodes = ({ episodes }) => {
  return (
    <StyledEpisodes>
      {episodes.map((episode, index) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </StyledEpisodes>
  );
};

export default Episodes;
