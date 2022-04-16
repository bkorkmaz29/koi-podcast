import crypto from "crypto";
import 'dotenv/config';

const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

export const getHeader= () => {

  const apiHeaderTime= Math.floor(Date.now()/1000); 
  const sha1Algorithm = "sha1";
  const sha1Hash = crypto.createHash(sha1Algorithm);
  const data4Hash = apiKey + apiSecret + apiHeaderTime;
  sha1Hash.update(data4Hash); 
  const hash4Header = sha1Hash.digest('hex'); 


  return ({ 
    "X-Auth-Date": ""+apiHeaderTime,
    "X-Auth-Key": apiKey,
    "Authorization": hash4Header,
    "User-Agent": "Koi-Podcast"
  })

}
