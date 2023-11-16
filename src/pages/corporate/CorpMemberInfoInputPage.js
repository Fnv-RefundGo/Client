import React, {useState} from 'react';
import {Button, Input, Popover, Steps} from "antd";
import "../../css/InfoInputPage.css";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);

const CorpMemberInfoInputPage = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const validateName = () => {
        const nameRegex = /^[a-zA-Z가-힣]+$/; // 이름에는 알파벳과 한글만 허용
        if (!nameRegex.test(name)) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '올바른 이름을 입력바랍니다.' }));
        } else if(name.length < 2){
            setErrors((prevErrors) => ({ ...prevErrors, name: '2글자 이상 입력바랍니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
    };

    const validatePhone = () => {
        const phoneRegex = /^\d{3}\d{4}\d{4}$/;
        if (!phoneRegex.test(phone) || !/^010|011|016|017|018|019/.test(phone.substring(0, 3))) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '올바른 휴대폰 번호를 입력바랍니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
    };
    const isFormValid = name.length >= 2 && /^[a-zA-Z가-힣]+$/.test(name) && /^\d{3}\d{4}\d{4}$/.test(phone);

    return(
        <div>
            <div style={{ width: "600px", margin: "0 auto"}}>
                <Steps
                    current={1}
                    progressDot={customDot}
                    style={{marginTop:"10px",}}
                    items={[{title: '',}, {title: '',}, {title: '',}, {title: '',},]}
                />
            </div>
            <div className="wrapper">
                <a href="/login-type">
                    <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
                </a><br/><br/><br/>
                <div className="corp-text1">상담 가능한 연락처 정보를 입력해주세요.</div>
                <div className="corp-text2">정확하고 신속한 환급 조회를 위해 필요한 서류 발생 시 담당자에게 연락드려요.</div>
                <br/><br/>
                <div className={`hometax-name ${errors.name ? 'error' : ''}`}>
                    이름
                    <Input
                        className={errors.name ? 'error-border' : ''}
                        placeholder="홍길동"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onBlur={() => {
                            validateName();
                        }}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>

                <div className={`hometax-phone ${errors.phone ? 'error' : ''}`}>
                    휴대폰번호<br />
                    <Input
                        className={errors.phone ? 'error-border' : ''}
                        placeholder="010 1234 5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        onBlur={() => {
                            validatePhone();
                        }}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                <Button className="nextButton" disabled={!isFormValid} a href="/corporate-infoInput">
                    다음
                </Button>
            </div>
        </div>
    );
}

export default CorpMemberInfoInputPage;