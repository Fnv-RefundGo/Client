import React, {useState} from 'react';
import "../../../css/InfoInputPage.css";
import '../../../css/AgreePage.css';
import {Button, Checkbox, Input} from "antd";

const CheckboxGroup = Checkbox.Group;
const plainOptions = [
    {
        label: (
            <span>
        [필수] 개인정보 이용 동의
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="termsBtn" href="/hometax-privacy"> <b> > </b></a>
      </span>
        ),
        value: 'terms',
    },
    {
        label: (
            <span>
        [필수] 제3자정보 제공 동의
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="termsBtn" href="/hometax-third"><b> > </b></a>
      </span>
        ),
        value: 'privacy',
    },
    {
        label: (
            <span>
        [선택] 마케팅 활용 및 수신 동의
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a className="termsBtn" href="/marketing"><b> > </b></a>
      </span>
        ),
        value: 'marketing',
    },
];

const InfoInputPage = () => {
    const [checkedList, setCheckedList] = useState([]);
    const checkAll = plainOptions.length === checkedList.length;
    const onChange = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions.map((option) => option.value) : []);
    };

    const isAllRequiredChecked = checkedList.includes('terms') && checkedList.includes('privacy');

    return(
        <div className="wrapper">
            <a href="/login-type">
                <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
            </a><br/><br/><br/>
            <div className="hometax-text1">
                <span className="hometax">홈택스</span> 정보연계를 위해<br/>사업장의 정보를 입력해 주세요.
            </div>
            <div className="hometax-name">
                이름
                <Input placeholder="홍길동" />
            </div>
            <div className="hometax-ssn">
                주민번호<br/>
                <Input className="ssn-front" placeholder="생년월일" /> - <Input className="ssn-back" placeholder="뒤 7자리"/>
            </div>
            <div className="hometax-phone">
                휴대폰번호<br/>
                <Input placeholder="010 1234 5678"/>
            </div>
            <div className="contents">
                <div className="contents-box">
                    <Checkbox className="checkbox" onChange={onCheckAllChange} checked={checkAll}>
                        모두 동의합니다.
                    </Checkbox>
                    <br /><br />
                    <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
                </div>
                <Button className="nextButton" disabled={!isAllRequiredChecked}>
                    다음
                </Button>
            </div>
        </div>
    );
}
export default InfoInputPage;