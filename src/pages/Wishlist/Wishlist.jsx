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

  const wishListParkCards = wishlistParks.map((p, idx) => 
  <WishlistCard park ={p} key={idx} wishlistParks={wishlistParks} setWishlistParks={setWishlistParks} />)

  return (
    <>
      <div>{wishListParkCards}</div>
    </>
  )
}