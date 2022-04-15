import React from 'react'
import { StyledPodcasts} from './Podcasts.styled';
import { PodcastCard } from '..'
import { Podcast } from '../../models/models'


const Podcasts = ( {podcasts, onClick} ) => {
  return (
      <StyledPodcasts>
    {podcasts.map((podcast, index) => (
        <PodcastCard key={podcast.id} podcast={podcast} onClick={onClick} />
      ))}
    </StyledPodcasts>
  )
}

export default Podcasts












