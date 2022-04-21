import { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { StyledSubscriptions } from "./Subscriptions.styled";
import { Podcast, Podcasts, Nav } from "../../components";
import { getCurrentUser, getCurrentUserId, getHeaders } from "../../services/authService";
import { IPodcast, UserContextType } from "../../models/models";
import { UserContext } from "../../context/userContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useOnClickOutside } from "../../hooks";

const Subscriptions: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);
  const [subs, setSubs] = useState<Array<IPodcast>>([]);
  const [podcast, setPodcast] = useState<IPodcast | null>(null);
  const { updateSubs } = useContext(UserContext) as UserContextType;

  const node = useRef<any>(null);
  useOnClickOutside(node, () => setOpen(false));
  const headers = getHeaders();
  //const API_URL = "http://localhost:5000"
  const API_URL = "https://koi-pod.herokuapp.com"

  let navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
    
    
  }, [userId])
  

  useEffect(() => {
    const getSubs = async () => {
      await axios
        .get(`${API_URL}/api/podcast/subscribe`, {
          headers: headers,
          params: {
            userId: userId,
          },
        })
        .then((res) => {
          const subStr = res.data;
          const json: any = parseJSON(subStr);
          setSubs(json);
        });
    };

    getSubs();
  }, []);

  useEffect(() => {
    updateSubs(subs.map((sub) => sub.id));
    
  }, [subs]);

  const parseJSON = (data: Array<string>) => {
    var jsonArray: number[] = [];

    data.forEach((element, index) => {
      const json = JSON.parse(element);
      jsonArray = [...jsonArray, json];
    });
    return jsonArray;
  };

  const handleClick: Function = (podcast: IPodcast) => {
    setPodcast(podcast);
    setShow(!show);
  };

  const handleUnsubscribe = async (podcast: IPodcast) => {
    setSubs(subs.filter(sub => sub !== podcast))
    await axios
      .post(
        `${API_URL}/api/podcast/subscribe/cancel`,
        {
          userId: userId,
          podcast: podcast,
        },
        { 
          headers: headers 
        }
      )
      .then(() => console.log("Unsubscribed"))
      .catch((err) => console.error(err));
  };
  const handleSubscribe = async (podcast: IPodcast) => {
    await axios
      .post(
        `${API_URL}/api/podcast/subscribe`,
        {
          userId: userId,
          podcast: podcast,
        },
        {
           headers: headers 
        }
      )
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
  };


  return (
    <StyledSubscriptions open={open}>
      <div  ref={node} className="nav-wrapper">
       <Nav setOpen={setOpen} open={open}/>
       </div>
     {!show && <h2>My Podcasts</h2> }
     {show && <button className="button-back" onClick = {() => setShow(false)}><FontAwesomeIcon size="lg" icon={faArrowAltCircleLeft} /></button> }
      <div className="podcasts-wrapper">
      {!show &&
      <Podcasts
        onClick={handleClick}
        podcasts={subs}
        subscribe={handleSubscribe}
        unsubscribe={handleUnsubscribe}
      /> }
      {show && podcast && <Podcast podcast={podcast}/>}
      </div>
    </StyledSubscriptions>
  );
};

export default Subscriptions;
