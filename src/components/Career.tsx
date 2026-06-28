import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>UI/UX & Graphic Designer</h4>
                <h5>Creative Agency</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Created digital brand assets, marketing campaigns, and user interface designs for startups. Collaborated directly with developers to ensure correct design hand-off and implementation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior UI/UX Designer</h4>
                <h5>Design Studio</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led design sprints and team processes in crafting elegant, scalable SaaS products and complex dashboards. Conducted user interviews, generated wireframes, and designed interactive prototypes.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Product Designer</h4>
                <h5>Freelance & Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designing and developing high-fidelity interactive web and mobile platforms for international clients. Designing comprehensive, component-based design systems and intuitive user experience structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
