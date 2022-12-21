import { Link } from "react-router-dom";
import "./ParkCard.css"

export default function ParkCard({park}) {
  return (
    <Link to={`/Park/${park.id}`}>
      <div className="parkCard"
      style={{
        background: `url(${park.images[0].url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
      }}
      >
        <h3 className="title">{park.name}</h3>
      </div>
    </Link>
  )
}