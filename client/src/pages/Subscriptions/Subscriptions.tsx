import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StyledSubscriptions } from "./Subscriptions.styled";
import { Podcast, Podcasts } from "../../components";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { IPodcast, SubsContextType } from "../../models/models";
import { SubsContext } from "../../context/subsContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'


const Subscriptions: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);
  const [subs, setSubs] = useState<Array<IPodcast>>([]);
  const [podcast, setPodcast] = useState<IPodcast | null>(null);
  const { updateSubs } = useContext(SubsContext) as SubsContextType;

  useEffect(() => {
    const getSubs = async () => {
      await axios
        .get(`http://localhost:5000/api/podcast/subscribe`, {
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
      .post(`http://localhost:5000/api/podcast/subscribe/cancel`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
  };

  const handleSubscribe = async (podcast: JSON) => {
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Subscribed"))
      .catch((err) => console.error(err));
  };

  const handleBack = () => {
    setShow(false);
  };

  return (
    <StyledSubscriptions>
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
