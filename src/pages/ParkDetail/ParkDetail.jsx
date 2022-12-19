import { useParams } from "react-router-dom";
import "./ParkDetail.css"

export default function ParkDetail({parks}) {
  const { parkId } = useParams();
  const park = parks.find(p => p.id === parkId) 
  return (
    <div className="parkDetail">
      <h1>{park.name}</h1>
      <img src={park.images[0].url} alt=""/>
      <br />
      <br />
      <a href={park.url} target="_blank" >Find out more!</a>
      <p>{park.description}</p>
      <h6>Latitude: {park.latitude} Longitude: {park.longitude}</h6>
      <a href={park.directionsUrl} target="_blank" >Get directions here!</a>
    </div>
  )
}