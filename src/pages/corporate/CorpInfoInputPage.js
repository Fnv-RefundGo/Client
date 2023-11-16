import React, {useState} from 'react';
import "../../css/InfoInputPage.css";
import "../../css/CorpInfoInputPage.css";
import {Button, Input, Popover, Steps} from "antd";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);

const CorpInfoInputPage = () => {
    const [corpName, setCorpName] = useState('');
    const [businessNumFst, setBusinessNumFst] = useState('');
    const [businessNumSec, setBusinessNumSec] = useState('');
    const [businessNumTrd, setBusinessNumTrd] = useState('');
    const [errors, setErrors] = useState({});

    // 상호명 검증
    const validateCorpName = () => {
        const nameRegex = /^[a-zA-Z가-힣]+$/; // 알파벳과 한글만 허용
        if (!nameRegex.test(corpName)) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '올바른 상호명을 입력바랍니다.' }));
        } else if(corpName.length < 1){
            setErrors((prevErrors) => ({ ...prevErrors, name: '1글자 이상 입력바랍니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
    };

    // 사업자번호 검증
    const validateBusinessNum = () => {
        const isValidFirstDigit = businessNumFst.length === 3;
        const isValidSecondDigit = businessNumSec.length === 2;
        const isValidThirdDigit = businessNumTrd.length === 5;

    if (!isValidFirstDigit || !isValidSecondDigit || !isValidThirdDigit ) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            num: '올바른 사업자번호를 입력바랍니다.'
        }));
    } else {
        setErrors((prevErrors) => ({...prevErrors, num:''}));
    }
    };

    const isFormValid = corpName.length >= 1 && /^[a-zA-Z가-힣]+$/.test(corpName) && businessNumFst.length === 3 && businessNumSec.length === 2 && businessNumTrd.length === 5;

    return(
        <div>
            <div style={{ width: "600px", margin: "0 auto"}}>
                <Steps
                    current={1.5}
                    progressDot={customDot}
                    style={{marginTop:"10px",}}
                    items={[{title: '',}, {title: '',}, {title: '',}, {title: '',},]}
                />
            </div>
            <div className="wrapper">
                <a href="/corporate-member-infoInput">
                    <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
                </a><br/><br/><br/>
                <div className="corp-text1">사업장 정보를 입력해주세요.</div>
                <br/><br/>
                <div className={`corp-name ${errors.name ? 'error' : ''}`}>
                    상호명
                    <Input
                        className={errors.name ? 'error-border' : ''}
                        placeholder=""
                        value={corpName}
                        onChange={(e) => setCorpName(e.target.value)}
                        onBlur={() => {
                            validateCorpName();
                        }}
                    />
                    {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                <div className={`corp-num ${errors.num ? 'error' : ''}`}>
                    사업자번호<br/>
                    <Input
                        className={`num-first ${errors.num ? 'error-border' : ''}`}
                        placeholder=""
                        value={businessNumFst}
                        onChange={(e) => setBusinessNumFst(e.target.value)}
                        onBlur={() => {
                            validateBusinessNum();
                        }}
                    /> - <Input
                        className={`num-second ${errors.num ? 'error-border' : ''}`}
                        placeholder=""
                        value={businessNumSec}
                        onChange={(e) => setBusinessNumSec(e.target.value)}
                        onBlur={() => {
                            validateBusinessNum();
                        }}
                    /> - <Input
                        className={`num-third ${errors.num ? 'error-border' : ''}`}
                        placeholder=""
                        value={businessNumTrd}
                        onChange={(e) => setBusinessNumTrd(e.target.value)}
                        onBlur={() => {
                            validateBusinessNum();
                        }}
                    />
                    {errors.num && <div className="error-message">{errors.num}</div>}
                </div>
                <Button className="nextButton" disabled={!isFormValid}>
                    다음
                </Button>
            </div>
        </div>
    );
}

export default CorpInfoInputPage;