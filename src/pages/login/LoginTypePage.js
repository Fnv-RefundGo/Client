import React from 'react';
import "../../css/LoginTypePage.css";
import LoginTypeSelection from "../../components/LoginTypeSelection";

const LoginTypePage = () => {
    return(
        <div>
            <img className="adImg" src={process.env.PUBLIC_URL + `/assets/ad.png`}/>
            <div className="loginType">
                <div className="typeTitle">로그인 유형을 선택해주세요.</div>
                <LoginTypeSelection />
            </div>
        </div>
    );
}
export default LoginTypePage;
