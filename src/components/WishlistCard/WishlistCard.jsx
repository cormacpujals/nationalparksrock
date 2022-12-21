import "./WishlistCard.css"

export default function WishlistCard({park}) {
  return (
    <div className="wishlistCard">
      <p>{park.name}</p>
    </div>
  )
}