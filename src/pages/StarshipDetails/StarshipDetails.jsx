import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getDetails } from "../../services/sw-api";


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchDetails = async () => 
    {
      const starshipDetails = await 
      getDetails(location.state.starship.url)
      setStarshipDetails(starshipDetails)
    }
    fetchDetails()
  }, [location.state.starship.url])
  
  return ( 
    <>
      <h2>Starship deeds</h2>
    </>
  )
}
export default StarshipDetails;