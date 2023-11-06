import React, {useState} from 'react';
import {Checkbox} from 'antd';
import '../css/AgreePage.css';

const CheckboxGroup = Checkbox.Group;
const plainOptions = [{
    label: (
        <span>
        [필수] 이용약관 동의
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/terms"> <b> > </b></a>
      </span>
    ), value: 'terms',
}, {
    label: (
        <span>
        [필수] 개인정보 수집 및 이용 동의
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/privacy"><b> > </b></a>
      </span>
    ), value: 'privacy',
}, {
    label: (
        <span>
        [선택] 마케팅 활용 및 수신 동의
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/marketing"><b> > </b></a>
      </span>
    ), value: 'marketing',
},];

const AgreePage = () => {
    const [checkedList, setCheckedList] = useState([]);
    const checkAll = plainOptions.length === checkedList.length;
    const onChange = (list) => {
        setCheckedList(list);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions.map(option => option.value) : []);
    };

    return (
        <div className="contents">
            <div className="title">서비스 이용약관</div>
            <div className="text">서비스 이용을 위한 약관에 동의해주세요.</div>
            <div className="contents-box">
                <Checkbox className="checkbox" onChange={onCheckAllChange} checked={checkAll}>
                    모두 동의합니다.
                </Checkbox>
                <br/><br/>
                <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange}/>
            </div>
            <img className="nextBtn" src={process.env.PUBLIC_URL + `/assets/next button.svg`}/>
        </div>
    );
};

export default AgreePage;