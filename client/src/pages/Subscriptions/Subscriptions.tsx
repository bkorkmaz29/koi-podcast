import { useState, useEffect  } from "react";
import axios from "axios";
import { StyledSubscriptions } from "./Subscriptions.styled";
import { Podcast, Podcasts } from "../../components";
import { getCurrentUser, getCurrentUserId } from "../../services/authService";

const Subscriptions: React.FC = () => {
  const [show, setShow] = useState<any>(0);
  const [userId, setUserId] = useState<Number | null>(getCurrentUserId()._id);
  const [subs, setSubs] = useState<Array<JSON>>([]);
  const [podcast, setPodcast] = useState<Number>(0);
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
          const json: any = parseJSON(subStr)
          setSubs(json);
        });
    };

    getSubs();
  }, []);

  const parseJSON = (data: Array<string>) => {
    var jsonArray: number[] = [];

    data.forEach((element, index) => {
      const json = JSON.parse(element);
      jsonArray = [...jsonArray, json];
    });
    return jsonArray;
  };





  const handleClick: Function = (id: Number) => {
    setPodcast(id);
     setShow(1);
   };
   

   const handleUnsubscribe = async (podcast: any) => {
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe/cancel`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Subscribed"))
      //.then(() => saveSub(podcast.id))
      .catch((err) => console.error(err));
  };



  const handleSubscribe = async (podcast: JSON) => {
    await axios
      .post(`http://localhost:5000/api/podcast/subscribe`, {
        userId: userId,
        podcast: podcast,
      })
      .then(() => console.log("Subscribed"))
      //.then(() => saveSub(podcast.id))
      .catch((err) => console.error(err));
  };


  

  return (
    <StyledSubscriptions>
        <h2 >My Podcasts</h2>

        <Podcasts onClick={handleClick} podcasts={subs} subscribe={handleSubscribe} unsubscribe={handleUnsubscribe}  />
        {show === 1 && <Podcast id={podcast} />}
        
    </StyledSubscriptions>
  )
}

export default Subscriptions