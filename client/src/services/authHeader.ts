export default function authHeader(): { "auth-token": string } {
  const userStr = localStorage.getItem("user");
  let user = null;
  
  if (userStr) user = JSON.parse(userStr);
  if (user && user.accessToken) {
    return { "auth-token": user.accessToken };
  } else {
    return { "auth-token": "" };
  }
}
