import React, { useState } from 'react';
import ProgramFelvitelForm from './ProgramFelvitelForm';
import CikkFelvitelForm from './CikkFelvitelForm';

const PublikalasValaszto = () => {
  const [selectedForm, setSelectedForm] = useState(''); 

  const handleFormSelect = (e) => {
    setSelectedForm(e.target.value);
  };

  return (
    <div className='valaszto'>
      <select onChange={handleFormSelect} value={selectedForm} className='valasztoSelect'>
        <option value="">Válasszon lehetőséget</option>
        <option value="program">Program felvitel</option>
        <option value="cikk">Cikk felvitel</option>
      </select>

      {selectedForm === 'program' && <ProgramFelvitelForm />}
      {selectedForm === 'cikk' && <CikkFelvitelForm />}
    </div>
  );
};

export default PublikalasValaszto;
