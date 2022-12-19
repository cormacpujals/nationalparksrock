import { useState, useEffect } from 'react';
import "./ParkList.css";
import ParkCard from "../../components/ParkCard/ParkCard"

export default function ParkList({parks}) {
  const [searchParks, setSearchParks] = useState([]);
  const [input, setInput] = useState("");
  
  useEffect(() => {
    function newParks() {
      let newParks = parks.map(p => p)
      setSearchParks(newParks)
    }
    newParks();
  }, [parks])
  
  function search() {
    let newParks = parks.map(p => p)
    let foundItems = newParks.filter(function(p) {
      if (p.name.toLowerCase().includes(input.toLowerCase())) return p;
    })
    setSearchParks(foundItems)
  }
  // if there's no input in my search, display the first 50 national parks, else display all national parks that fit the search
  let parkCards;
  if (searchParks) {
    parkCards = searchParks.map((p, idx) => <ParkCard park={p} key={idx} />)
  }


  return (
    <div>
      <>
        Search:
        <input 
        onChange={(evt) => setInput(evt.target.value)} 
        type="text"
        value={input} 
        />
        <button onClick={search}>Search</button>
        <br />
        <br />
        <div className="parkList">{parkCards}</div>
      </>
    </div>
  )
}

// export default function ParkList({parks}) {
//   const [searchParks, setSearchParks] = useState([]);
//   const [input, setInput] = useState("");
  
//   useEffect(() => {
//     function newParks() {
//       let newParks = parks.map(p => p)
//       setSearchParks(newParks)
//     }
//     newParks();
//   }, [parks])
  
//   function search() {
//     let newParks = parks.map(p => p)
//     let foundItems = newParks.filter(function(p) {
//       if (p.name.toLowerCase().includes(input.toLowerCase())) return p;
//     })
//     setSearchParks(foundItems)
//   }
//   // if there's no input in my search, display the first 50 national parks, else display all national parks that fit the search
//   let parkCards;
//   if (searchParks) {
//     parkCards = searchParks.map((p, idx) => <ParkCard park={p} key={idx} />)
//   }


//   return (
//     <div>
//       <>
//         Search:
//         <input 
//         onChange={(evt) => setInput(evt.target.value)} 
//         type="text"
//         value={input} 
//         />
//         <button onClick={search}>Search</button>
//         <br />
//         <br />
//         <div className="parkList">{parkCards}</div>
//       </>
//     </div>
//   )
// }

