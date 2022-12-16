import "./ParkCard.css"

export default function ParkCard({park}) {
  return (
    <div className="parkCard">
      <p>{park.name}</p>
    </div>
  )
}