import { Link } from "react-router-dom";
import "./ParkCard.css"

export default function ParkCard({park}) {
  return (
    <Link to={`/Park/${park.id}`}>
      <div className="parkCard">
        <p>{park.name}</p>
      </div>
    </Link>
  )
}