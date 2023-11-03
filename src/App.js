import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import TermsPage from "./pages/TermsPage";
import InfoPage from "./pages/InfoPage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/terms" element={<TermsPage/>}/>
                        <Route path="/info" element={<InfoPage/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
