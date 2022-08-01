import logo from '../resource/ziggo-logo.svg'
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="container">
      <section className="one">
        <img src={logo} className="survey-logo" alt="logo" />
      </section>
      <section className="two">
        <button className="btn btn-primary" onClick={() => navigate("/question-one") }>
          <span className="btn-title">Begin</span>
        </button>
      </section>
    </div>
  )
}

export default LandingPage
