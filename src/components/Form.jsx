import { useState } from 'react';

function CustomInput({ type, id, placeholder }) {
  const [value, setValue] = useState('');
  return (
    <input
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      required
    />
  );
}

export function Form() {
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
        id: 'graduation-date',
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
        id: 'date-start',
        label: 'From: *',
        type: 'date',
      },
      {
        id: 'date-end',
        label: 'To: *',
        type: 'date',
      },
    ],
  };
  return (
    <form className="cv-form">
      <fieldset className="personal-info">
        <div className="fieldset-title">Personal Information:</div>
        {formData.personalInfo.map((data) => {
          return (
            <div className="fieldset-content" key={data.id}>
              <label htmlFor={data.id}>{data.label}</label>
              <CustomInput
                type={data.type}
                id={data.id}
                placeholder={data.placeholder}
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
                placeholder={data.placeholder}
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
                placeholder={data.placeholder}
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