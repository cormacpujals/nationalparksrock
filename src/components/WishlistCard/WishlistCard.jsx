import * as parksAPI from "../../utilities/parks-api";
import "./WishlistCard.css"


export default function WishlistCard({park, wishlistParks, setWishlistParks}) {

  async function deleteFromWishlist() {
    const favorite = await parksAPI.remove(park._id);
    const updatedList = wishlistParks.filter(p => p._id !== favorite._id);
    setWishlistParks(updatedList);
  }


  return (
    <div className="wishlistCard">
      <span>{park.name}</span>
      <button onClick={deleteFromWishlist}>Remove</button>
    </div>
  )
}