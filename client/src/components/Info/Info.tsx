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

const Info: React.FC<Props> = ({ podName, producer, description, language, website, listen }) => {
  return (
    <StyledInfo>
        <h1>{podName}</h1>
        <h2>by {producer}</h2>
        
        <p>{description}</p>
        <div className="links" >
          <a href={listen} >Subscribe</a>
          <a href={listen} >Listen</a>
          <a href={website}>Website</a>          
        </div>
    </StyledInfo>
  )
}

export default Info