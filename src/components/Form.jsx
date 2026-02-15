function CustomInput({ type, id, value, placeholder, onChange }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={type === 'email' ? 'on' : 'off'}
      required
    />
  );
}

export function Form({ cvData, setCvData, toggleSubmitted }) {
  const formData = {
    personalInfo: [
      {
        id: 'name',
        label: 'Full Name: *',
        type: 'text',
        placeholder: 'Ex. John Smith',
      },
      {
        id: 'email',
        label: 'Email: *',
        type: 'email',
        placeholder: 'Ex. JohnSmith@email.com',
      },
      {
        id: 'number',
        label: 'Phone Number: *',
        type: 'tel',
        placeholder: 'Ex. +123 4567 890',
      },
    ],
    education: [
      {
        id: 'school',
        label: 'School/Institute: *',
        type: 'text',
        placeholder: 'Ex. University of Waterloo',
      },
      {
        id: 'degree',
        label: 'Degree: *',
        type: 'text',
        placeholder: 'Ex. Law',
      },
      {
        id: 'graduationDate',
        label: 'Graduation Date: *',
        type: 'date',
      },
    ],
    experience: [
      {
        id: 'company',
        label: 'Company Name: *',
        type: 'text',
        placeholder: 'Ex. Meta',
      },
      {
        id: 'position',
        label: 'Position Title: *',
        type: 'text',
        placeholder: 'Ex. Corporate Attorney',
      },
      {
        id: 'responsibility',
        label: 'Main Responsibility: *',
        type: 'text',
        placeholder: 'Ex. Bailing Mark Zuckerberg out of jail',
      },
      {
        id: 'dateStart',
        label: 'From: *',
        type: 'date',
      },
      {
        id: 'dateEnd',
        label: 'To: *',
        type: 'date',
      },
    ],
  };
  return (
    <form onSubmit={toggleSubmitted} className="cv-form">
      <fieldset className="personal-info">
        <div className="fieldset-title">Personal Information:</div>
        {formData.personalInfo.map((data) => {
          return (
            <div className="fieldset-content" key={data.id}>
              <label htmlFor={data.id}>{data.label}</label>
              <CustomInput
                type={data.type}
                id={data.id}
                value={cvData[`${data.id}`]}
                placeholder={data.placeholder}
                onChange={(event) =>
                  setCvData({ ...cvData, [`${data.id}`]: event.target.value })
                }
              />
            </div>
          );
        })}
      </fieldset>
      <fieldset className="education">
        <div className="fieldset-title">Education:</div>
        {formData.education.map((data) => {
          return (
            <div className="fieldset-content" key={data.id}>
              <label htmlFor={data.id}>{data.label}</label>
              <CustomInput
                type={data.type}
                id={data.id}
                value={cvData[`${data.id}`]}
                placeholder={data.placeholder}
                onChange={(event) =>
                  setCvData({ ...cvData, [`${data.id}`]: event.target.value })
                }
              />
            </div>
          );
        })}
      </fieldset>
      <fieldset className="experience">
        <div className="fieldset-title">Past Experience:</div>
        {formData.experience.map((data) => {
          return (
            <div className="fieldset-content" key={data.id}>
              <label htmlFor={data.id}>{data.label}</label>
              <CustomInput
                type={data.type}
                id={data.id}
                value={cvData[`${data.id}`]}
                placeholder={data.placeholder}
                onChange={(event) =>
                  setCvData({ ...cvData, [`${data.id}`]: event.target.value })
                }
              />
            </div>
          );
        })}
      </fieldset>
      <fieldset>
        <button className="submit-btn">Create</button>
      </fieldset>
    </form>
  );
}
