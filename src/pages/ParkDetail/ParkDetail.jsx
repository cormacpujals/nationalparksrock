import { useParams } from "react-router-dom";
import * as parksAPI from "../../utilities/parks-api";
import "./ParkDetail.css"

export default function ParkDetail({parks}) {
  const { parkId } = useParams();
  const park = parks.find(p => p.id === parkId) 

  async function addToWishlist() {
    const favorite = await parksAPI.toggleAdd(park._id)
  }

  return (
    <div className="parkDetail">
      <h1>{park.name}</h1>
      <img src={park.images[0].url} alt=""/>
      <br />
      <br />
      <p>{park.description}</p>
      <a href={park.url} target="_blank" >Find out more!</a>
      &nbsp;|&nbsp;
      <a href={park.directionsUrl} target="_blank" >Get directions here!</a>
      <h6>Latitude: {park.latitude} Longitude: {park.longitude}</h6>
      <button onClick={addToWishlist}>Add to Wishlist</button>
    </div>
  )
}