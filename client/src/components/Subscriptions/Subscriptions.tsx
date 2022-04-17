import { useState, useEffect, useRef  } from "react";
import axios from "axios";
import { StyledSubscriptions, StyledSub, StyledSubs } from "./Subscriptions.styled";
import { Info } from "../../components";
import { IPodcast } from "../../models/models";

interface Props {
    onClick: any ,
    onSubscribe: Function,
    subs: Array<string>,

}

interface SubProps {
  onClick: any,
  onSubscribe: Function,
  sub: any
}

const Sub: React.FC<SubProps> = ({onClick, sub, onSubscribe}) => {
  const [pod, setPod] = useState<JSON | any>()
  
  useEffect(() => {
    
    const podJSON = JSON.parse(sub);
    
    setPod(podJSON);
  console.log(pod);
    
  
    
  }, []);

  const handleClick = () => {
    onClick(pod.id);
  }
  return (
    <StyledSub onClick={handleClick}>
    {pod &&<div>
      <div className="img-wrapper">
        <img src={pod.image} alt="Podcast" />
      </div>
      <div className="info-wrapper">
      <h1>{pod.title}</h1>
      <h3>by {pod.ownerName}</h3>
      </div>

    </div> }
    </StyledSub>
  )
}

    
const Subs: React.FC<Props> = ({onClick, subs, onSubscribe}) => {
  

  return (
    <StyledSubs>
    
    { subs.map( (sub) => ( <Sub key={sub} onClick={onClick} 
        sub={sub} 
        onSubscribe={onSubscribe}/>) ) }
    </StyledSubs>
  )
  
}

const Subscriptions: React.FC<Props> = ({onClick, subs, onSubscribe}) => {


  return (
    <StyledSubscriptions>
        <h2 >My Podcasts</h2>

        <Subs onClick={onClick} subs={subs} onSubscribe={onSubscribe}/>
      
        
    </StyledSubscriptions>
  )
}

export default Subscriptions