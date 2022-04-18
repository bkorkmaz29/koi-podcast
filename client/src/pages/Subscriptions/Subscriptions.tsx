import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { StyledSubscriptions } from "./Subscriptions.styled";
import { Podcast, Podcasts } from "../../components";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";
import { IPodcast, SubsContextType } from "../../models/models";
import { SubsContext } from "../../context/subsContext";


const Subscriptions: React.FC = () => {
  const [show, setShow] = useState<any>(0);
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
    setShow(1);
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

  return (
    <StyledSubscriptions>
      <h2>My Podcasts</h2>
      <div className="podcasts-wrapper">
      <Podcasts
        onClick={handleClick}
        podcasts={subs}
        subscribe={handleSubscribe}
        unsubscribe={handleUnsubscribe}
      />
      {podcast && <Podcast podcast={podcast} />}
      </div>
    </StyledSubscriptions>
  );
};

export default Subscriptions;
