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
    name: '',
    email: '',
    number: '',
    school: '',
    degree: '',
    graduationDate: '',
    company: '',
    position: '',
    responsibility: '',
    dateStart: '',
    dateEnd: '',
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
