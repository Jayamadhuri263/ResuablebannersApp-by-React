// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} list-container`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button">Show more</button>
      </div>
    </li>
  )
}

export default BannerCardItem
