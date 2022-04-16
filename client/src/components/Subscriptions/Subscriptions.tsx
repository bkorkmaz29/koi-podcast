import { useState, useEffect } from "react";
import axios from "axios";
import { StyledSubscriptions } from "./Subscriptions.styled";
import { Podcasts } from "../../components";
import { IPodcast } from "../../models/models";

interface Props {
    onClick: Function,
    onSubscribe: Function,
    subIds: Array<String>

}
const Subscriptions: React.FC<Props> = ({onClick, subIds, onSubscribe}) => {
    const [subs, setSubs] = useState<any>([]);


    useEffect(() => {
      subIds.forEach((subId) => {getById(subId);});
    
    
    }, [subIds])
    


    const getById = async (id: String) => { 
        const responseInfo = await axios(
          `http://localhost:5000/api/podcast/byid`,
          {
            params: {
              id: id,
            },
          }
        );
        const newPodcast: IPodcast = responseInfo.data.feed;
        setSubs([...subs, newPodcast])
        
    };
   
  
  



  return (
    <StyledSubscriptions>
        <button >back</button>
        <Podcasts
          onClick={onClick}
          podcasts={subs}
          subscribe={onSubscribe}
        />

    </StyledSubscriptions>
  )
}

export default Subscriptions