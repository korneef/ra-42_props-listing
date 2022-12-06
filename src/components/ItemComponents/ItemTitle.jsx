export default function ItemTitle({ title }) {
  return <p className="item-title">{title.length > 50 ? title.slice(0, 51) + '...' : title}</p>
}
