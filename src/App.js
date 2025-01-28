import { Route, Routes } from "react-router-dom";
import Kezdolap from "./pages/Kezdolap";
import Bejelentkezes from "./pages/Bejelentkezes";
import Regisztracio from "./pages/Regisztracio";
import './App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Kezdolap />}>
                <Route path="bejelentkezes" element={<Bejelentkezes />} />
                <Route path="regisztracio" element={<Regisztracio />} />

            </Route>
        </Routes>
    );
}

export default App;