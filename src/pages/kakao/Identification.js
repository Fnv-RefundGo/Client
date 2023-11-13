import React from 'react';
import {Button} from "antd";
import "../../css/Identification.css";

const Identification = () => {

    return (
        <div>
            <Button className="backBtn"> <a href="/"> > 뒤로가기 </a></Button>
            <div className="kakao-title">본인확인</div>
            <div className="kakao-text1">카카오 계정으로 로그인하여</div>
            <div className="kakao-text2">세액 공제 환급 대상을 확인하세요.</div>
            <a className="kakao-loginBtn"
               href="https://kauth.kakao.com/oauth/authorize?client_id=88f077af67004ade2b18e854877842f6&redirect_uri=http://localhost:3000/api/v1/oauth2/kakao&response_type=code">
                <img className="kakao-logo" src={process.env.PUBLIC_URL + `/assets/kakao_logo.png`}/>
                <div className="kakao-text3">카카오 계정으로 로그인</div>
            </a>
        </div>
    );
}
export default Identification;