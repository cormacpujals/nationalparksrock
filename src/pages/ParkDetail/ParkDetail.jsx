import { useParams } from "react-router-dom";

export default function ParkDetail({parks}) {
  const { parkId } = useParams();
  const park = parks.find(p => p.id === parkId) 
  return (
    <>
      <h1>Park: {park.name}</h1>
    </>
  )
}