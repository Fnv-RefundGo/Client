import React, {useEffect, useState} from 'react';
import '../../../css/InfoInputPage.css';
import '../../../css/CertificationPage.css';
import {Button, Modal} from "antd";

const CertificationPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // 타이머
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
            }
            if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return(
        <div className="wrapper">
            <a href="/hometax-individual-infoInput">
                <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
            </a><br/><br/><br/>
            <div className="hometax-text1">
                <span className="kakao-cert">카카오 간편인증</span>으로<br/>
                빠르게 환급액을 확인해드릴게요.
            </div>
            <div className="hometax-text2">
                세금 환급액 조회를 위해 카카오 간편인증이 필요합니다.
            </div>
            <img className="hometax-cert" src={process.env.PUBLIC_URL + `/assets/hometax_cert.png`}/>
            <Button className="certButton" onClick={showModal} >홈택스 인증요청</Button>
            <Modal
                width="400px"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                centered
                footer={[
                    <Button
                        className={`certification-button ${minutes !== 0 || seconds !== 0 ? 'disabled' : ''}`}
                        style={{ margin: '0 auto', display: 'block', backgroundColor: '#4A5BF6', color: 'white',
                            width:'300px', height: '50px'}}
                        disabled={minutes !== 0 || seconds !== 0}
                        key="ok"
                        onClick={handleOk}>
                        재인증 요청
                    </Button>,
                ]}
            >
                <div className="kakao-cert-text">
                    <p>카카오톡으로 인증 요청 메세지를 보냈습니다.</p>
                    <p>인증시간 만료 시 재인증 요청 버튼을 눌러 재시도 바랍니다.</p>
                </div>
                <div className="kakao-cert-timer">
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </div>

            </Modal>
        </div>
    );
}
export default CertificationPage;