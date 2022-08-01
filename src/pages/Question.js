import { useNavigate } from 'react-router-dom'

const Question = () => {
  const navigate = useNavigate()

  return (
    <div className="question-box">
      <section className="question-section">
        <div className="choice-card">
          <h1>Test</h1>
        </div>
      </section>
      <div className="button-container">
        <button onClick={() => navigate("/")}>Back</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Question
