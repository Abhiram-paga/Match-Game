import './index.css'

const ScoreCard = props => {
  const {score, onPlayAgain} = props

  const onPlayAgainBtnClick = () => {
    onPlayAgain()
  }

  return (
    <div className="score-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="your-score-para">Your Score</p>
      <p className="score-para">{score}</p>
      <button
        type="button"
        onClick={onPlayAgainBtnClick}
        className="play-again-btn"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset-logo"
        />
        <p className="btn-text">PLAY AGAIN</p>
      </button>
    </div>
  )
}
export default ScoreCard
