export function Cv({ cvData, toggleSubmitted }) {
  return (
    <div className="cv">
      <h2 className="cv-title">CV</h2>
      <button onClick={toggleSubmitted} className="cv-edit-btn">
        Edit
      </button>
      <section>
        <h3 className="cv-section-title">Personal Information</h3>
        <ul className="cv-list">
          <li className="cv-list-item">
            <span>Name</span> <span>{cvData.name}</span>
          </li>
          <li className="cv-list-item">
            <span>Email</span> <span>{cvData.email}</span>
          </li>
          <li className="cv-list-item">
            <span>Number</span> <span>{cvData.number}</span>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="cv-section-title">Education</h3>
        <ul className="cv-list">
          <li className="cv-list-item">
            <span>School</span> <span>{cvData.school}</span>
          </li>
          <li className="cv-list-item">
            <span>Degree</span> <span>{cvData.degree}</span>
          </li>
          <li className="cv-list-item">
            <span>Graduated</span> <span>{cvData.graduationDate}</span>
          </li>
        </ul>
      </section>
      <section>
        <h3 className="cv-section-title">Experience</h3>
        <ul className="cv-list">
          <li className="cv-list-item">
            <span>Company</span> <span>{cvData.company}</span>
          </li>
          <li className="cv-list-item">
            <span>Position</span> <span>{cvData.position}</span>
          </li>
          <li className="cv-list-item">
            <span>Main Responsibility</span>{' '}
            <span>{cvData.responsibility}</span>
          </li>
          <li className="cv-list-item">
            <span>From</span> <span>{cvData.dateStart}</span>
          </li>
          <li className="cv-list-item">
            <span>To</span> <span>{cvData.dateEnd}</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
