/* eslint-disable react/prop-types */
const Feature = (props) => {
  const { src, alt, title, desc } = props
  return (
    <div className="feature-item">
      <img src={src} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export default Feature
