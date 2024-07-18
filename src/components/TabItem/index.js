import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onTabItemClick} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'active-tab' : ''

  const onTabClick = () => {
    onTabItemClick(tabId)
  }

  return (
    <li className="tabs-list-item-container">
      <button
        type="button"
        onClick={onTabClick}
        className={`tab-btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
