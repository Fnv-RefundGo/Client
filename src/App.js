import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/terms/PrivacyPage";
import AgreePage from "./pages/AgreePage";
import MarketingPage from "./pages/terms/MarketingPage";
import LoginTypePage from "./pages/login/LoginTypePage";
import Identification from "./pages/kakao/Identification";
import InfoInputPage from "./pages/individual/hometax/InfoInputPage";
import PrivacyPageHometax from "./pages/terms/PrivacyPage-hometax";
import ThirdPageHometax from "./pages/terms/ThirdPage-hometax";
import Redirection from "./components/Redirection";
import OAuth from "./components/OAuth";
import CertificationPage from "./pages/individual/hometax/CertificationPage";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/terms" element={<TermsPage/>}/>
                        <Route path="/privacy" element={<PrivacyPage/>}/>
                        <Route path="/marketing" element={<MarketingPage />}/>
                        <Route path="/agree" element={<AgreePage/>}/>
                        <Route path="/login-type" element={<LoginTypePage/>}/>
                        <Route path="/kakao-identification" element={<Identification/>}/>
                        <Route path="/hometax-individual-infoInput" element={<InfoInputPage/>}/>
                        <Route path="/hometax-privacy" element={<PrivacyPageHometax/>}/>
                        <Route path="/hometax-third" element={<ThirdPageHometax/>}/>
                        {/*<Route exact path="/api/v1/oauth2/kakao" element={<OAuth />} />*/}
                        <Route path="/hometax-individual-cert" element={<CertificationPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
