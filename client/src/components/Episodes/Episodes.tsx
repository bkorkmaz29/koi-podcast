import { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

import { StyledEpisodes, StyledEpisodeCard } from "./Episodes.styled";

import { Episode } from "../../models/models";

interface EpisodesProps {
  episodes: Array<Episode>;
}

interface EpisodeProps {
  episode: Episode;
}

const EpisodeCard: React.FC<EpisodeProps> = ({ episode }) => {
  const [listen, setListen] = useState<boolean>(false);

  return (
    <StyledEpisodeCard listen={listen}>
      <div className="info">
        <h1>{episode.title}</h1>
        <p>{episode.datePublishedPretty}</p>
      </div>
      <button className="listen-button" onClick={() => setListen(!listen)}>
        Listen
      </button>
      {listen && (
        <div className="player">
          <ReactAudioPlayer src={episode.enclosureUrl} controls />
        </div>
      )}
    </StyledEpisodeCard>
  );
};

const Episodes: React.FC<EpisodesProps> = ({ episodes }) => {
  return (
    <StyledEpisodes>
      {episodes.map((episode: any) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </StyledEpisodes>
  );
};

export default Episodes;
