import { Header } from './components/Header';
import { Form } from './components/Form';
import { Cv } from './components/Cv';
import './styles/App.css';
import { useState } from 'react';

export function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function toggleSubmitted() {
    setIsSubmitted(!isSubmitted);
  }

  const [cvData, setCvData] = useState({
    name: 'Cameron Brown',
    email: 'email@email.com',
    number: '+27666',
    school: 'School',
    degree: 'Computer Science',
    graduationDate: '2/15/2026',
    company: 'Meta',
    position: 'Head Mistress',
    responsibility: 'Looking pretty',
    dateStart: '2/15/2026',
    dateEnd: '2/15/2026',
  });

  return (
    <>
      <Header />
      <main className="main">
        {!isSubmitted ? (
          <Form
            cvData={cvData}
            setCvData={setCvData}
            toggleSubmitted={toggleSubmitted}
          />
        ) : (
          <Cv cvData={cvData} toggleSubmitted={toggleSubmitted} />
        )}
      </main>
    </>
  );
}
