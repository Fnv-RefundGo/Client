import React, {useEffect, useState} from 'react';
import "../../../css/InfoInputPage.css";
import '../../../css/AgreePage.css';
import '../../../css/ComwelIndiInfoInput.css';
import {Button, Checkbox, Input, Modal, Popover, Steps} from "antd";
import {useNavigate} from "react-router-dom";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);
const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    {
        label: (
            <span>[필수] 개인정보 이용 동의 &nbsp;&nbsp;<a className="termsBtn" href="/comwel-privacy"> <b> > </b></a></span>
        ),
        value: 'privacy',
    },
    {
        label: (
            <span>[필수] 서비스 이용약관 동의&nbsp;&nbsp;<a className="termsBtn" href="/comwel-terms"> <b> > </b></a></span>
        ),
        value: 'terms',
    },
    {
        label: (
            <span>[필수] 제3자정보 제공 동의&nbsp;&nbsp;<a className="termsBtn" href="/comwel-third"><b> > </b></a>
      </span>
        ),
        value: 'third',
    },
    {
        label: (
            <span>[필수] 고유식별 정보처리 동의&nbsp;&nbsp;<a className="termsBtn" href="/comwel-id"><b> > </b></a></span>
        ),
        value: 'id',
    },
];

const ComwelIndiInfoInputPage = () => {
    const [name, setName] = useState('');
    const [ssnFront, setSsnFront] = useState('');
    const [ssnBack, setSsnBack] = useState('');
    const [phone, setPhone] = useState('');
    const [checkedList, setCheckedList] = useState([]);
    const checkAll = plainOptions.length === checkedList.length;
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

    const validateSSN = () => {
        // 앞자리 생년월일 형태 검증 (6자리)
        const birthDateRegex = /^\d{6}$/;
        const isValidBirthDate = birthDateRegex.test(ssnFront);
        const monthDigits = parseInt(ssnFront.substring(2, 4), 10);
        const dayDigits = parseInt(ssnFront.substring(4, 6), 10);
        const isValidMonth = monthDigits >= 1 && monthDigits <= 12;
        const isValidDay = dayDigits >= 1 && dayDigits <= getDaysInMonth(monthDigits);

        // 뒷자리 7자리 검증
        const isValidFirstDigit = /^[1-4]/.test(ssnBack.charAt(0)); // 맨 앞자리가 1234인지 확인
        const isValidBackDigits = ssnBack.length === 7;

        if (!isValidBirthDate || !isValidMonth || !isValidDay) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                ssn: '올바른 생년월일을 입력바랍니다.'
            }));
        } else if(!isValidBackDigits || !isValidFirstDigit){
            setErrors((prevErrors) => ({
                ...prevErrors,
                ssn: '올바른 주민번호 뒷자리를 입력바랍니다.'
            }));
        }else {
            setErrors((prevErrors) => ({ ...prevErrors, ssn: '' }));
        }
    };

    // 월에 따른 일수 반환
    const getDaysInMonth = (month) => {
        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            return 31;
        } else if ([4, 6, 9, 11].includes(month)) {
            return 30;
        } else if (month === 2) {
            return 28;
        }
        return 0;
    };


    const validatePhone = () => {
        const phoneRegex = /^\d{3}\d{4}\d{4}$/;
        if (!phoneRegex.test(phone) || !/^010|011|016|017|018|019/.test(phone.substring(0, 3))) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '올바른 휴대폰 번호를 입력바랍니다.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
    };

    const onChange = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions.map((option) => option.value) : []);
    };

    const isAllRequiredChecked =
        checkedList.includes('terms') &&
        checkedList.includes('privacy') &&
        checkedList.includes('third') &&
        checkedList.includes('id');

    const isFormValid = name.length >= 2 && /^[a-zA-Z가-힣]+$/.test(name) && ssnFront.length === 6 && ssnBack.length === 7 && /^\d{3}\d{4}\d{4}$/.test(phone);

    // 세션 스토리지에 데이터 저장
    const storeDataInSessionStorage = () => {
        const storedData = sessionStorage.getItem('userData');
        const currentData = {name, ssnFront, ssnBack, phone,};

        // 저장된 데이터가 없거나 현재 입력된 데이터와 다를 때에만 저장
        if (!storedData) {
            sessionStorage.setItem('userData', JSON.stringify(currentData));
        }
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const showModal = () => {
        // 세션 스토리지에서 저장된 데이터를 가져옴
        const storedData = sessionStorage.getItem('userData');

        // 저장된 데이터가 있다면 현재 입력 값과 비교
        if (storedData) {
            const parsedData = JSON.parse(storedData);

            if (
                name !== parsedData.name ||
                ssnFront !== parsedData.ssnFront ||
                ssnBack !== parsedData.ssnBack ||
                phone !== parsedData.phone
            ) {
                // 입력 값이 다를 때만 모달을 표시
                setIsModalOpen(true);
            } else {
                navigate("/comwel-individual-cert");
            }
        } else {
            storeDataInSessionStorage();
        }
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return(
        <div>
            <div style={{ width: "600px", margin: "0 auto"}}>
                <Steps
                    current={2}
                    progressDot={customDot}
                    style={{marginTop:"10px",}}
                    items={[{title: '',}, {title: '',}, {title: '',}, {title: '',},]}
                />
            </div>
        <div className="wrapper">
            <a href="/hometax-individual-cert">
                <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
            </a><br/><br/><br/>
            <div className="hometax-text1">
                <span className="comwel">근로복지공단</span> 토탈 서비스 정보연계를 위해<br/>사업장의 정보를 입력해 주세요.
            </div>
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

            <div className={`hometax-ssn ${errors.ssn ? 'error' : ''}`}>
                주민번호<br />
                <Input
                    className={`ssn-front ${errors.ssn ? 'error-border' : ''}`}
                    placeholder="생년월일"
                    value={ssnFront}
                    onChange={(e) => setSsnFront(e.target.value)}
                    onBlur={() => {
                        validateSSN();
                    }}
                /> - <Input
                    className={`ssn-back ${errors.ssn ? 'error-border' : ''}`}
                    placeholder="뒤 7자리"
                    value={ssnBack}
                    onChange={(e) => setSsnBack(e.target.value)}
                    onBlur={() => {
                        validateSSN();
                    }}
                />
                {errors.ssn && <div className="error-message">{errors.ssn}</div>}
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

            <div className="contents">
                <div className="comwel-contents-box">
                    <Checkbox className="checkbox" onChange={onCheckAllChange} checked={checkAll}>
                        모두 동의합니다.
                    </Checkbox>
                    <br /><br />
                    <CheckboxGroup className="checkboxGroup" options={plainOptions} value={checkedList} onChange={onChange} />
                </div>
                <Button className="comwel-nextButton" disabled={!isAllRequiredChecked || !isFormValid} onClick={showModal}>
                    다음
                </Button>
                <Modal
                    width="400px"
                    visible={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    centered
                    footer={[
                        <Button style={{ margin: '0 auto', display: 'block', backgroundColor: '#4A5BF6', color: 'white', width: '200px' }} key="ok" onClick={handleOk}>
                            확인
                        </Button>,
                    ]}
                >
                    <div className="modal-text">
                        <h3>정보가 일치하지 않아요. <br/> 정확한 본인의 정보를 입력해주세요.</h3>
                    </div>
                </Modal>
            </div>
        </div>
        </div>
    );
}
export default ComwelIndiInfoInputPage;