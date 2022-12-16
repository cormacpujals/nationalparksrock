import { useState } from "react";
import "./ParkList.css";
import ParkCard from "../../components/ParkCard/ParkCard"

export default function ParkList(parks) {
  const parkCards = parks.map((p, idx) => <ParkCard park={p} key={idx} />)

  return (
    <div className="parkList">
      <div>{parkCards}</div>
    </div>
  )
}