import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/terms/PrivacyPage";
import AgreePage from "./pages/AgreePage";
import MarketingPage from "./pages/terms/MarketingPage";
import TermsPageMain from "./pages/terms/TermsPage-main";
import PrivacyPageMain from "./pages/terms/PrivacyPage-main";
import LoginType from "./pages/login/LoginType";
import Identification from "./pages/kakao/Identification";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/terms" element={<TermsPage/>}/>
                        <Route path="/terms-main" element={<TermsPageMain/>}/>
                        <Route path="/privacy" element={<PrivacyPage/>}/>
                        <Route path="/privacy-main" element={<PrivacyPageMain/>}/>
                        <Route path="/marketing" element={<MarketingPage />}/>
                        <Route path="/agree" element={<AgreePage/>}/>
                        <Route path="/login-type" element={<LoginType/>}/>
                        <Route path="/kakao-identification" element={<Identification/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
