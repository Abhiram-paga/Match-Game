import './index.css'

const ImageItem = props => {
  const {imageDetails, onThumnailClick} = props
  const {id, thumbnailUrl, category} = imageDetails

  const onImageClick = () => {
    onThumnailClick(id)
  }

  return (
    <li className="images-list-item-container">
      <button type="button" onClick={onImageClick} className="button">
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
