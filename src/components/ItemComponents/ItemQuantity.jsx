export default function ItemQuantity({ quantity }) {
  let level = 'level-low';
  (quantity > 10) && (level = 'level-medium');
  (quantity > 20) && (level = 'level-high');
  return <p className={`item-quantity ${level}`}>{quantity} left</p>
}
