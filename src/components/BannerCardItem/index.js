import './index.css'

const BannerCardItem = props => {
  const {BannerCard} = props
  const {headerText, description, className} = BannerCard

  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-btn" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
