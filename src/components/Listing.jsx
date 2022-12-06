import Item from "./Item"

function Listing({ items }) {
  return (
    <div className="item-list">
      {
          items.reduce((acc, item) => {
            if (item.state === 'active') {
              acc.push(<Item key={item.listing_id} id={item.listing_id} url={item.url} mainImage={item.MainImage} title={item.title} currencyCode={item.currency_code} price={item.price} quantity={item.quantity}/>);
            }
            return acc;
          }, [])
      }
    </div>
  )
}

Listing.defaultProps = {
  items: [],
}

export default Listing
