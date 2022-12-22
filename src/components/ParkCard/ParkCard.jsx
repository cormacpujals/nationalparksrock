import { Link } from "react-router-dom";
import "./ParkCard.css"

export default function ParkCard({park}) {
  return (
    <Link to={`/Park/${park.id}`}>
      <div className="parkCard"
      style={{
        backgroundImage: `url(${park.images[0].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
      >
        <p className="title">{park.name}</p>
      </div>
    </Link>
  )
}