import React, { useState } from 'react';

const CikkFelvitelForm = () => {
    const [formData, setFormData] = useState({
        cikk_nev: '',
        cikk_tartalom: '',
        cikk_datum: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form kitöltve ezekkel az adatokkal: ", formData);
    };

    return (
        <div className="programFelvitel">
            <h2>Cikk feltöltése</h2>
            <form onSubmit={handleSubmit}>
                <div className="felvitelSor">
                    <label htmlFor="cikk_nev">Cikk neve:</label>
                    <input 
                        type="text"
                        id="cikk_nev"
                        name="cikk_nev"
                        value={formData.cikk_nev}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="cikk_tartalom">Cikk tartalom:</label>
                    <textarea
                        rows="10" cols="30"
                        id="cikk_tartalom"
                        name="cikk_tartalom"
                        value={formData.cikk_tartalom}
                        onChange={handleChange}
                    />
                </div>

                <div className="felvitelSor">
                    <label htmlFor="cikk_datum">Dátum:</label>
                    <input 
                        type="date"
                        id="cikk_datum"
                        name="cikk_datum"
                        value={formData.cikk_datum}
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

export default CikkFelvitelForm;
