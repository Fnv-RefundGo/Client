import React, {useState} from 'react';
import "../../css/InfoInputPage.css";
import "../../css/CorpInfoInputPage.css";
import {Button, Input, Popover, Steps, Modal} from "antd";
import {useNavigate} from "react-router-dom";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);

const CorpInfoInputPage = () => {
    const [corpName, setCorpName] = useState('');
    const [businessNumFst, setBusinessNumFst] = useState('');
    const [businessNumSec, setBusinessNumSec] = useState('');
    const [businessNumTrd, setBusinessNumTrd] = useState('');
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
    const [isCompleteManagerModalOpen, setIsCompleteManagerModalOpen] = useState(false);
    const [isFailManagerModalOpen, setIsFailManagerModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

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
        const businessNumFstRegex = /^\d{3}$/;
        const businessNumSecRegex = /^\d{2}$/;
        const businessNumTrdRegex = /^\d{5}$/;
        const isValidFirstDigit = businessNumFstRegex.test(businessNumFst);
        const isValidSecondDigit = businessNumSecRegex.test(businessNumSec);
        const isValidThirdDigit = businessNumTrdRegex.test(businessNumTrd);

    if (!isValidFirstDigit || !isValidSecondDigit || !isValidThirdDigit ) {
        setErrors((prevErrors) => ({
            ...prevErrors,
            num: '올바른 사업자번호를 입력바랍니다.'
        }));
    } else {
        setErrors((prevErrors) => ({...prevErrors, num:''}));
    }
    };

    const isFormValid = corpName.length >= 1 && /^[a-zA-Z가-힣]+$/.test(corpName)
        && /^\d{3}$/.test(businessNumFst) && /^\d{2}$/.test(businessNumSec) && /^\d{5}$/.test(businessNumTrd);

    // 세션 스토리지에 데이터 저장
    const storeDataInSessionStorage = () => {
        const storedData = sessionStorage.getItem('corpData');
        const currentData = {corpName, businessNumFst, businessNumSec, businessNumTrd};
        if (!storedData) {
            sessionStorage.setItem('corpData', JSON.stringify(currentData));
        }
    }

    // 세션 스토리지에 데이터 저장
    const storeManagerDataInSessionStorage = () => {
        const storedData = sessionStorage.getItem('managerData');
        const currentData = {name, phone};
        if (!storedData) {
            sessionStorage.setItem('managerData', JSON.stringify(currentData));
        }
    }

    // 모달
    const showModal = () => {
        const storedData = sessionStorage.getItem('corpData');
        if(storedData) {
            const parsedData = JSON.parse(storedData);
            if (
                corpName !== parsedData.corpName ||
                businessNumFst !== parsedData.businessNumFst ||
                businessNumSec !== parsedData.businessNumSec ||
                businessNumTrd !== parsedData.businessNumTrd
            ) {
                navigate("/");
            } else {
                setIsModalOpen(true);
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

    // 담당자 변경 모달
    const showManagerModal = () => {
        setIsManagerModalOpen(true);
    };
    const ManagerHandleOk = () => {
        setIsManagerModalOpen(false);
    };
    const ManagerHandleCancel = () => {
        setIsManagerModalOpen(false);
    };

    // 담당자 변경 결과 모달
    const showResultManagerModal = () => {
        const storedData = sessionStorage.getItem('managerData');
        if(storedData) {
            const parsedData = JSON.parse(storedData);
            if (
                name !== parsedData.name ||
                phone !== parsedData.phone
            ) {
                showCompleteManagerModal();
            } else {
                showFailManagerModal();
            }
        } else {
            storeManagerDataInSessionStorage();
        }
    };
    const showCompleteManagerModal = () => {
        setIsCompleteManagerModalOpen(true);
    }
    const CompleteManagerHandleOk = () => {
        setIsCompleteManagerModalOpen(false);
    };

    const CompleteManagerHandleCancel = () => {
        setIsCompleteManagerModalOpen(false);
    };

    // 담당자 변경 실패 모달
    const showFailManagerModal = () => {
        setIsFailManagerModalOpen(true);
    }

    const FailManagerHandleOk = () => {
        setIsFailManagerModalOpen(false);
    }

    const FailManagerHandleCancel = () => {
        setIsFailManagerModalOpen(false);
    }

    // 담당자 이름, 연락처 검증
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

    const isManagerFormValid = name.length >= 2 && /^[a-zA-Z가-힣]+$/.test(name) && /^\d{3}\d{4}\d{4}$/.test(phone);

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
                <Button className="nextButton" disabled={!isFormValid} onClick={showModal}>
                    다음
                </Button>
                <Modal
                    visible={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    centered
                    width="400px"
                    style={{textAlign:'center',} }
                    footer={[
                        <div style={{display:'flex'}}>
                        <Button style={{ margin: '0 auto', backgroundColor: '#DCDCDC', width: '150px' }} key="ok" onClick={handleOk}>
                            닫기
                        </Button>
                        <Button style={{ margin: '0 auto', backgroundColor: '#4A5BF6', color: 'white', width: '150px',}} onClick={showManagerModal}>
                            담당자 변경
                        </Button>
                        </div>
                    ]}
                >
                    <h3>이미 환급 조회 신청을 한 사업장입니다.</h3>
                </Modal>

                <Modal
                    title="담당자 변경하기"
                    visible={isManagerModalOpen}
                    onOk={ManagerHandleOk}
                    onCancel={ManagerHandleCancel}
                    centered
                    width="400px"
                    footer={[
                        <div style={{display:'flex'}}>
                            <Button style={{ margin: '0 auto', backgroundColor: '#DCDCDC', width: '150px', }} key="ok" onClick={ManagerHandleOk}>
                                닫기
                            </Button>
                            <Button style={{ margin: '0 auto', backgroundColor: '#4A5BF6', color: 'white', width: '150px',}}
                                    disabled={!isManagerFormValid} onClick={showResultManagerModal}>
                                변경하기
                            </Button>
                        </div>
                    ]}
                >
                    <div className={`name ${errors.name ? 'error' : ''}`}>
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
                    <div className={`phone ${errors.phone ? 'error' : ''}`}>
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
                </Modal>
                <Modal
                    visible={isCompleteManagerModalOpen}
                    onOk={CompleteManagerHandleOk}
                    onCancel={CompleteManagerHandleCancel}
                    centered
                    width="300px"
                    footer={[
                        <div style={{display:'flex'}}>
                            <Button style={{ margin: '0 auto', backgroundColor: '#DCDCDC', width: '150px', }} key="ok" onClick={CompleteManagerHandleOk}>
                                닫기
                            </Button>
                        </div>
                    ]}
                ><h3>담당자 변경이 완료되었습니다.</h3>
                </Modal>
                <Modal
                    visible={isFailManagerModalOpen}
                    onOk={FailManagerHandleOk}
                    onCancel={FailManagerHandleCancel}
                    centered
                    width="300px"
                    footer={[
                        <div style={{display:'flex'}}>
                            <Button style={{ margin: '0 auto', backgroundColor: '#DCDCDC', width: '150px', }} key="ok" onClick={FailManagerHandleOk}>
                                닫기
                            </Button>
                        </div>
                    ]}
                ><h3>변경된 정보가 없어요. <br/> 변경할 정보를 입력해주세요. </h3>
                </Modal>
            </div>
        </div>
    );
}

export default CorpInfoInputPage;