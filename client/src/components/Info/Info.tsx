import { StyledInfo} from "./Info.styled"

interface Props {
    podName: string;
    producer: string;
    episodeCount:number;
    description: string;
    language: string;
    website: string;
    listen: string;

}

const Info: React.FC<Props> = ({ podName, producer, description}) => {
  return (
    <StyledInfo>
        <h1>{podName}</h1>
        <h2>by {producer}</h2>
        <p>{description}</p>
      
    </StyledInfo>
  )
}

export default Info