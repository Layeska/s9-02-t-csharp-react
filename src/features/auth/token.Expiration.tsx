import { useEffect } from "react";
import { useAppSelector } from "../../hooks/store";
import { useNavigate } from "react-router-dom";

function TokenExpired() {
  const navigate = useNavigate();
  const tokenExpiration = useAppSelector((state)=> state.auth.expiration)

  useEffect(() => {
    if (tokenExpiration && typeof tokenExpiration === 'number') {
      const expirationDate = new Date(tokenExpiration).toISOString();
      if (expirationDate && Date.parse(expirationDate) < Date.now()) {
        navigate("/signoff")
      } 
    }
  }, [navigate, tokenExpiration]);
  
  return null;
}

export default TokenExpired