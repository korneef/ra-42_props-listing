export default function ItemPrice({ currencyCode, price }) {
  let priceWithCurrenceCode

  if (currencyCode === 'USD' || currencyCode === 'EUR') {
    currencyCode === 'USD' ? priceWithCurrenceCode = `$${price}` : priceWithCurrenceCode = `€${price}`
  } else {
    priceWithCurrenceCode = `${price} ${currencyCode}`
  }

  return <p className="item-price">{priceWithCurrenceCode}</p>
}