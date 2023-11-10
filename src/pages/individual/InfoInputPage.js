import React from 'react';
import "../../css/InfoInputPage.css";
import {Input} from "antd";

const InfoInputPage = () => {
    return(
        <div className="wrapper">
            <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/><br/><br/><br/>
            <div className="hometax-text1">
                <span className="hometax">홈택스</span> 정보연계를 위해<br/>사업장의 정보를 입력해 주세요.
            </div>
            <div className="hometax-name">
                이름
                <Input placeholder="홍길동" />
            </div>
            <div className="hometax-ssn">
                주민번호<br/>
                <Input className="ssn-front" placeholder="생년월일" /> - <Input className="ssn-back" placeholder="뒤 7자리"/>
            </div>
            <div className="hometax-phone">
                휴대폰번호<br/>
                <Input placeholder="010 1234 5678"/>
            </div>
        </div>
    );
}
export default InfoInputPage;