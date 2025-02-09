import React, { useState } from 'react';
import useApiContext from '../../contexts/ApiContext.js';
import ProgramLegordulo from './ProgramLegordulo.js';
import axios from 'axios';
import { myAxios } from '../../api/MyAxios.js';

const ProgramFelvitelForm = () => {
    const { programTipusok } = useApiContext();
    const [formData, setFormData] = useState({
        program_cim: '',
        program_leiras: '',
        program_helyszin: '',
        program_ideje: '',
        foglalas_kezdete: '',
        foglalas_vege: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await myAxios.post('http://localhost:8000/api/program-hozzadasa', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log("Program sikeresen hozzáadva:", response.data);
        } catch (err) {
            if (err.response && err.response.status === 422) {
                // Itt megjelenítheted a validációs hibákat
                console.log("Validációs hibák:", err.response.data.errors);
            } else {
                console.log("Hiba történt a küldés során", err);
            }
        }
    };

    return(
        <div className="programFelvitel">
            <h2>Program feltöltése</h2>
            <form onSubmit={handleSubmit}>
                <div className="felvitelSor">
                    <label htmlFor="program_cim">Program címe:</label>
                    <input 
                        type="text"
                        id="program_cim"
                        name="program_cim"
                        value={formData.program_cim}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="program_tipus">Program típusa:</label>
                    <select 
                        name="program_tipus" 
                        id="program_tipus"
                        value={formData.program_tipus}
                        onChange={handleChange}
                            
                    >
                        {
                            programTipusok.map((elem) => {
                             return <ProgramLegordulo programtipus_id={elem.programtipus_id} elnevezes={elem.elnevezes} key={elem.programtipus_id}/>
                            })
                        }
                        
                    </select>
                </div>

                <div className="felvitelSor">
                    <label htmlFor="program_leiras">Leírás:</label>
                    <textarea
                        rows="10" cols="30"
                        id="program_leiras"
                        name="program_leiras"
                        value={formData.program_leiras}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="program_helyszin">Helyszín:</label>
                    <input 
                        type="text"
                        id="program_helyszin"
                        name="program_helyszin"
                        value={formData.program_helyszin}
                        onChange={handleChange}
                    />
                </div>
                <div className="felvitelSorAlso">
                    <div className="felvitelSor">
                        <label htmlFor="program_ar">Jegy ára:</label>
                        <input 
                            type="money"
                            id="program_ar"
                            name="program_ar"
                            value={formData.program_ar}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="felvitelSor">
                        <label htmlFor="program_ideje">Ideje:</label>
                        <input 
                            type="datetime-local"
                            id="program_ideje"
                            name="program_ideje"
                            value={formData.program_ideje}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="felvitelSor">
                        <label htmlFor="foglalas_kezdete">Fogalás kezdete:</label>
                        <input 
                            type="date"
                            id="foglalas_kezdete"
                            name="foglalas_kezdete"
                            value={formData.foglalas_kezdete}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="felvitelSor">
                        <label htmlFor="program_ideje">Foglalás vége:</label>
                        <input 
                            type="date"
                            id="foglalas_vege"
                            name="foglalas_vege"
                            value={formData.foglalas_vege}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="gombok">
                <button type='submit' className="elkuldGomb">Hozzáadás</button>
                <button className="megsemGomb">Mégsem</button>
                </div>
            </form>
        </div>
    );
}

export default ProgramFelvitelForm