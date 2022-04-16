import React from 'react'
import { StyledPodcasts} from './Podcasts.styled';
import { PodcastCard } from '..'


const Podcasts = ( {podcasts, onClick, subscribe} ) => {
  
  return (
      <StyledPodcasts>
    {podcasts.map((podcast, index) => (
        <PodcastCard key={podcast.id} podcast={podcast} onClick={onClick} subscribe={subscribe} />
      ))}
    </StyledPodcasts>
  )
}

export default Podcasts











