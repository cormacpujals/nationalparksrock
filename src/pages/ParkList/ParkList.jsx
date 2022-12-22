import { useState, useEffect } from 'react';
import "./ParkList.css";
import ParkCard from "../../components/ParkCard/ParkCard"

export default function ParkList({parks}) {
  const [searchInput, setSearchInput] = useState("");

  const searchParks = searchInput ? 
    parks.filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase())).slice(0, 20)
    : 
    parks.slice(183, 216);
  const parkCards = searchParks.map((p, idx) => <ParkCard park={p} key={idx} />)

  return (
    <div className="parkListDiv">
      <h1>Discover your next adventure now!</h1>
      <br />
      <span>Search:</span> &nbsp;
      <input 
      onChange={(evt) => setSearchInput(evt.target.value)} 
      type="text"
      />
      <br />
      <br />
      <div className="parkList">{parkCards}</div>
    </div>
  )
}