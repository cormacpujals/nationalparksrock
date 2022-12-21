import { useState, useEffect } from 'react';
import * as parksAPI from "../../utilities/parks-api";
import WishlistCard from "../../components/WishlistCard/WishlistCard";
import "./Wishlist.css";

export default function ParkList({parks}) {
  const [wishlistParks, setWishlistParks] = useState([]);

  useEffect(() => {
    async function getWishlist() {
      const parks = await parksAPI.wishlistIndex(); 
      setWishlistParks(parks)
    }
    getWishlist();
  }, [])
  // console.log(wishlistParks)


  const wishListParkCards = wishlistParks.map((p, idx) => <WishlistCard park ={p} key={idx} />)


  return (
    <>
      <div>{wishListParkCards}</div>
    </>
  )
}