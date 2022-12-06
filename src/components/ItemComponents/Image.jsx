function Image({url, imageUrl, imageAlt }) {
  return (
    <div className="item-image">
      <a href={url}>
        <img src={imageUrl} alt={imageAlt.length > 50 ? imageAlt.slice(0, 51) + '...' : imageAlt} />
      </a>
    </div>
  )
}

export default Image;
