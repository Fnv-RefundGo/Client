import React, {useEffect} from 'react';
import {Button} from "antd";
import "../../css/Identification.css";
import {useNavigate} from "react-router-dom";

const Identification = () => {
    const REST_API_KEY = "88f077af67004ade2b18e854877842f6";
    const REDIRECT_URI = "http://localhost:3000/api/v1/oauth2/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const loginHandler = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    useEffect(() => {
        // URL의 쿼리 매개변수에서 인가 코드를 가져옴
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');

        if (authorizationCode) {
            // 서버로 인가 코드를 전송
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: authorizationCode }),
            })
                .then((response) => response.json())
                .then((data) => {
                    // 서버로부터의 응답 처리 (토큰이 포함될 수 있음)
                    console.log(data);
                })
                .catch((error) => {
                    console.error('에러:', error);
                });
        }
    }, []);


    return (
        <div>
            <Button className="backBtn"> <a href="/"> > 뒤로가기 </a></Button>
            <div className="kakao-title">본인확인</div>
            <div className="kakao-text1">카카오 계정으로 로그인하여</div>
            <div className="kakao-text2">세액 공제 환급 대상을 확인하세요.</div>
            <div className="kakao-loginBtn" onClick={loginHandler}>
                <img className="kakao-logo" src={process.env.PUBLIC_URL + `/assets/kakao_logo.png`}/>
                <div className="kakao-text3">카카오 계정으로 로그인</div>
            </div>

        </div>
    );
}
export default Identification;