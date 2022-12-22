import { useState, useEffect } from 'react';
import "./ParkList.css";
import ParkCard from "../../components/ParkCard/ParkCard"

export default function ParkList({parks}) {
  const [searchInput, setSearchInput] = useState("");

  const searchParks = searchInput ? 
    parks.filter(p => p.name.toLowerCase().includes(searchInput.toLowerCase())).slice(0, 30)
    : 
    parks.slice(418, 468);
  const parkCards = searchParks.map((p, idx) => <ParkCard park={p} key={idx} />)

  return (
    <div>
      Search: &nbsp;
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