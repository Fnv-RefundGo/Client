import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import AgreePage from "./pages/AgreePage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/terms" element={<TermsPage/>}/>
                        <Route path="/privacy" element={<PrivacyPage/>}/>
                        <Route path="/agree" element={<AgreePage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
