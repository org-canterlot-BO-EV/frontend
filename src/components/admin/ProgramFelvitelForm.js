import React, { useState } from 'react';
import useApiContext from '../../contexts/ApiContext.js';
import ProgramLegordulo from './ProgramLegordulo.js';
import axios from 'axios';
import { myAxios } from '../../api/MyAxios';


const ProgramFelvitelForm = () => {
    axios.defaults.withCredentials = true;
    const { programTipusok } = useApiContext();
    const [formData, setFormData] = useState({
        program_nev: '',
        program_leiras: '',
        program_helyszin: '',
        program_datum: '',
        program_ar: '',
        foglalas_kezdete: '',
        foglalas_vege: '',
        programtipus_id: '',  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const getCsrfToken = async () => {
        const response = await axios.get('http://localhost:8000/api/csrf-token');
        return response.data.csrf_token;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const csrfToken = await getCsrfToken();
    
            const response = await axios.post('http://localhost:8000/api/program-hozzadasa', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
            });
    
            console.log("Program sikeresen hozzáadva:", response.data);
        } catch (err) {
            if (err.response && err.response.status === 422) {
                console.log("Validációs hibák:", err.response.data.errors);
            } else {
                console.log("Hiba történt a küldés során", err);
                console.log(formData);
            }
        }
    };

    return (
        <div className="programFelvitel">
            <h2>Program feltöltése</h2>
            <form onSubmit={handleSubmit}>
                <div className="felvitelSor">
                    <label htmlFor="program_nev">Program címe:</label>
                    <input 
                        type="text"
                        id="program_nev"
                        name="program_nev"
                        value={formData.program_nev}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="programtipus_id">Program típusa:</label>
                    <select 
                        name="programtipus_id" 
                        id="programtipus_id"
                        value={formData.programtipus_id}
                        onChange={handleChange}
                    >
                        {
                            programTipusok.map((elem) => (
                                <ProgramLegordulo 
                                    key={elem.programtipus_id} 
                                    programtipus_id={elem.programtipus_id}
                                    elnevezes={elem.elnevezes} 
                                />
                            ))
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
                </div>


                <div className="felvitelSor">
                    <label htmlFor="program_datum">Ideje:</label>
                    <input 
                        type="datetime-local"
                        id="program_datum"
                        name="program_datum"
                        value={formData.program_datum}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="foglalas_kezdete">Foglalás kezdete:</label>
                    <input 
                        type="date"
                        id="foglalas_kezdete"
                        name="foglalas_kezdete"
                        value={formData.foglalas_kezdete}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="foglalas_vege">Foglalás vége:</label>
                    <input 
                        type="date"
                        id="foglalas_vege"
                        name="foglalas_vege"
                        value={formData.foglalas_vege}
                        onChange={handleChange}
                    />
                </div>

                <div className="gombok">
                    <button type="submit" className="elkuldGomb">Hozzáadás</button>
                    <button type="button" className="megsemGomb">Mégsem</button>
                </div>
            </form>
        </div>
    );
}

export default ProgramFelvitelForm;
