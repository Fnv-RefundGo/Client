import React, { useEffect } from 'react';
import { Button } from "antd";
import "../../css/Identification.css";
import { useNavigate, useLocation } from "react-router-dom";

const Identification = () => {
    const REST_API_KEY = "88f077af67004ade2b18e854877842f6";
    const REDIRECT_URI = "http://localhost:3000/api/v1/oauth2/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const navigate = useNavigate();
    const location = useLocation();

    const loginHandler = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    useEffect(() => {
        // 현재 경로에서 'code' 파라미터를 추출
        const urlParams = new URLSearchParams(location.search);
        const authorizationCode = urlParams.get('code');

        if (authorizationCode) {
            // 서버로 인가 코드를 전송
            fetch('/api/v1/oauth2/kakao', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code: authorizationCode }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        console.error('Response not OK:', response.status, response.statusText);
                        throw new Error('Failed to fetch data');
                    }
                })
                .then((data) => {
                    // 서버로부터의 응답 처리 (토큰이 포함될 수 있음)
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [location, navigate]);

    return (
        <div>
            <Button className="backBtn"> <a href="/"> > 뒤로가기 </a></Button>
            <div className="kakao-title">본인확인</div>
            <div className="kakao-text1">카카오 계정으로 로그인하여</div>
            <div className="kakao-text2">세액 공제 환급 대상을 확인하세요.</div>
            <div className="kakao-loginBtn" onClick={loginHandler}>
                <img className="kakao-logo" src={process.env.PUBLIC_URL + `/assets/kakao_logo.png`} alt="Kakao Logo" />
                <div className="kakao-text3">카카오 계정으로 로그인</div>
            </div>
        </div>
    );
}

export default Identification;
