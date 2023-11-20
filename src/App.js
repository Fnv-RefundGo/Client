import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TermsPage from "./pages/terms/TermsPage";
import PrivacyPage from "./pages/terms/PrivacyPage";
import AgreePage from "./pages/AgreePage";
import MarketingPage from "./pages/terms/MarketingPage";
import LoginTypePage from "./pages/login/LoginTypePage";
import Identification from "./pages/kakao/Identification";
import HometaxIndiInfoInputPage from "./pages/individual/hometax/HometaxIndiInfoInputPage";
import PrivacyPageHometax from "./pages/terms/PrivacyPage-hometax";
import ThirdPageHometax from "./pages/terms/ThirdPage-hometax";
import Redirection from "./components/Redirection";
import OAuth from "./components/OAuth";
import HometaxIndiCertificationPage from "./pages/individual/hometax/HometaxIndiCertificationPage";
import ComwelIndiInfoInputPage from "./pages/individual/comwel/ComwelIndiInfoInputPage";
import ComwelIndiCertificationPage from "./pages/individual/comwel/ComwelIndiCertificationPage";
import PrivacyPageComwel from "./pages/terms/PrivacyPage-comwel";
import TermsPageComwel from "./pages/terms/TermsPage-comwel";
import ThirdPageComwel from "./pages/terms/ThirdPage-comwel";
import IdPageComwel from "./pages/terms/IdPage-comwel";
import IndiRefundCompletePage from "./pages/individual/IndiRefundCompletePage";
import CorpMemberInfoInputPage from "./pages/corporate/CorpMemberInfoInputPage";
import CorpInfoInputPage from "./pages/corporate/CorpInfoInputPage";
import HometaxCorpCertificationUploadPage from "./pages/corporate/hometax/HometaxCorpCertificationUploadPage";
import ComwelCorpCertificationUploadPage from "./pages/corporate/comwel/ComwelCorpCertificationUploadPage";


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

                        <Route path="/api/v1/oauth2/kakao" element={<AgreePage/>}/>
                        <Route path="/login-type" element={<LoginTypePage/>}/>
                        <Route path="/kakao-identification" element={<Identification/>}/>

                        <Route path="/hometax-individual-infoInput" element={<HometaxIndiInfoInputPage/>}/>
                        <Route path="/hometax-individual-cert" element={<HometaxIndiCertificationPage/>}/>
                        <Route path="/hometax-privacy" element={<PrivacyPageHometax/>}/>
                        <Route path="/hometax-third" element={<ThirdPageHometax/>}/>

                        <Route path="/comwel-individual-infoInput" element={<ComwelIndiInfoInputPage/>}/>
                        <Route path="/comwel-individual-cert" element={<ComwelIndiCertificationPage/>}/>
                        <Route path="/comwel-privacy" element={<PrivacyPageComwel/>}/>
                        <Route path="/comwel-terms" element={<TermsPageComwel/>}/>
                        <Route path="/comwel-third" element={<ThirdPageComwel/>}/>
                        <Route path="/comwel-id" element={<IdPageComwel/>}/>

                        <Route path="/individual-refund-complete" element={<IndiRefundCompletePage/>}/>

                        <Route path="/corporate-member-infoInput" element={<CorpMemberInfoInputPage/>}/>
                        <Route path="/corporate-infoInput" element={<CorpInfoInputPage/>}/>
                        <Route path="/corporate-hometax-certification-upload" element={<HometaxCorpCertificationUploadPage/>}/>
                        <Route path="/corporate-comwel-certification-upload" element={<ComwelCorpCertificationUploadPage/>}/>

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
