import React from 'react';
import {Popover, Steps} from 'antd';
import "../../css/LoginTypePage.css";
import LoginTypeSelection from "../../components/LoginTypeSelection";
const customDot = (dot) => (
    <Popover>{dot}</Popover>
);
const LoginTypePage = () => {
    return(
        <div>
            <div style={{ width: "570px", margin: "0 auto"}}>
            <Steps
                current={1}
                current={2}
                progressDot={customDot}
                style={{marginTop:"10px", width: "200px",}}
                items={[{title: '',}, {title: '',}, {title: '',}, {title: '',},{title: '',},{title: '',}]}
            />
            </div>
            <img className="adImg" src={process.env.PUBLIC_URL + `/assets/ad.png`}/>
            <div className="loginType">
                <div className="typeTitle">로그인 유형을 선택해주세요.</div>
                <LoginTypeSelection />
            </div>
        </div>
    );
}
export default LoginTypePage;
