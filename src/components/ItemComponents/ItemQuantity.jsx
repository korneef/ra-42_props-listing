export default function ItemQuantity({ quantity }) {
  let level = 'level-low';
  (quantity > 10) && (level = 'level-medium');
  (quantity > 20) && (level = 'level-high');
  return <p className={`item-quantity ${level}`}>{quantity} left</p>
}

// level-low — если остаток меньше 10 включительно;
// level-medium — если остаток меньше 20 включительно;
// level-high — если остаток больше 20.