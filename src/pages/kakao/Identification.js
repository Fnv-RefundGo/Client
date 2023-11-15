import React, { useEffect } from 'react';
import { Button } from 'antd';
import '../../css/Identification.css';
import { useNavigate } from 'react-router-dom';

const Identification = () => {
    const navigate = useNavigate();
    const REST_API_KEY = '88f077af67004ade2b18e854877842f6';
    const REDIRECT_URI = 'http://localhost:3000/api/v1/oauth2/kakao';
    const KAKAO_AUTO_URI = `https://kauth.kakao.com/oauth/authorize?client_id=88f077af67004ade2b18e854877842f6&redirect_uri=http://localhost:3000/api/v1/oauth2/kakao&response_type=code`;

    const loginHandler = () => {
        window.location.href = KAKAO_AUTO_URI;
    };

    useEffect(() => {
        // Assuming KAKAO_AUTO_URI is the authorization code, you might want to extract it from the URL.
        const authorizationCode = new URLSearchParams(window.location.search).get('code');

        if (authorizationCode) {
            // Send the authorization code to the '/login' endpoint
            fetch('/login', {
                method: 'POST',
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
                    console.log(data); // Handle the response from the server
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, []); // Make sure to add the dependencies if needed

    return (
        <div>
            <Button className="backBtn">
                <a href="/"> > 뒤로가기 </a>
            </Button>
            <div className="kakao-title">본인확인</div>
            <div className="kakao-text1">카카오 계정으로 로그인하여</div>
            <div className="kakao-text2">세액 공제 환급 대상을 확인하세요.</div>
            <div className="kakao-loginBtn" onClick={loginHandler}>
                <img className="kakao-logo" src={process.env.PUBLIC_URL + `/assets/kakao_logo.png`} alt="Kakao Logo" />
                <div className="kakao-text3">카카오 계정으로 로그인</div>
            </div>
        </div>
    );
};

export default Identification;
