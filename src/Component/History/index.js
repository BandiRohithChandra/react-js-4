import './index.css'

const HistoryDetails = props => {
  const {userDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <div>
      <li>
        <div className="history-container">
          <div className="details-container">
            <p className="time">{timeAccessed}</p>
            <img src={logoUrl} className="logo-img" alt={logoUrl} />
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="delete-icon"
              alt="delete"
              onClick={handleDelete}
            />
          </div>
        </div>
      </li>
    </div>
  )
}

export default HistoryDetails
