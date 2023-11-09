import React from 'react';
import {Button} from "antd";
import "../../css/Identification.css";

const Identification = () => {
    return(
        <div>
            <Button className="backBtn"> <a href="/"> > 뒤로가기 </a></Button>
            <div className="kakao-title">본인확인</div>
            <div className="kakao-text1">카카오 계정으로 로그인하여</div>
            <div className="kakao-text2">세액 공제 환급 대상을 확인하세요.</div>
            <div className="kakao-loginBtn">
                <img className="kakao-logo" src={process.env.PUBLIC_URL + `/assets/kakao_logo.png`}/>
                <div className="kakao-text3">카카오 계정으로 로그인</div>
            </div>
        </div>
    );
}
export default Identification;