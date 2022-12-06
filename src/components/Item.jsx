import PropTypes from 'prop-types';
import Image from './ItemComponents/Image'
import ItemTitle from './ItemComponents/ItemTitle';
import ItemPrice from './ItemComponents/ItemPrice';
import ItemQuantity from './ItemComponents/ItemQuantity';

function Item({ id, url, mainImage, title, currencyCode, price, quantity }) {
  return (
    <div className="item" key={id}>
      <Image url={url} imageUrl={mainImage.url_570xN} imageAlt={title} />
      <div className="item-details">
        <ItemTitle title={title} />
        <ItemPrice currencyCode={currencyCode} price={price}/>
        <ItemQuantity quantity={quantity}/>
      </div>
    </div>
  )
}

Item.propTypes = {
  id: PropTypes.number,
  url: PropTypes.string,
  mainImage: PropTypes.shape({
    url_570xN: PropTypes.string.isRequired
  }),
  title: PropTypes.string,
  currencyCode: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.number
}

export default Item