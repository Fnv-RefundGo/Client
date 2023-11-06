import React from 'react';
import "../css/Footer.css";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const goOnTermsPage = () =>{
        navigate("/terms");
    }
    const goOnPrivacyPage = () =>{
        navigate("/privacy");
    }
    return (
        <div className="footer">
            <div className="content">
                <br/>
                <div><b>아코테 컨설팅 주식회사</b></div>
                <div><b>Copyright© Acote. All Rights Reserved</b></div><br/>
                <div className="opacity">
                    <div>사업자등록번호 : 254-86-02496</div>
                    <div>서울특별시 강남구 도산대로1길 73,5층 501호(신사동)</div>
                    <div>고객상담 전화번호 : 02-3443-6659</div>
                    <div>이메일 : taxgocs@acote.kr</div>
                </div>
                <br/>
                <div><b>아코테 컨설팅 기본약관</b></div>
                <div className="opacity">
                <div className="display">
                    <div className="terms" onClick={goOnTermsPage}>서비스 이용약관</div>
                    <div className="privacy" onClick={goOnPrivacyPage}>개인정보 처리방침</div>
                </div></div><br/>
            </div>
        </div>
    );
}
export default Footer;