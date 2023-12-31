import React from 'react';
import '../css/RefundCompletePage.css';
import {Button} from "antd";

const RefundCompletePage = () => {
    return(
        <div className="complete-wrapper">
            <div className="complete-text1">사업장의 환급조회 접수가 완료되었습니다.</div>
            <div className="complete-text2">평균 3분, 최대 3일까지 소요될 수 있습니다.</div>
            <div className="imgAlign">
                <img className="refundImg" src={process.env.PUBLIC_URL + `/assets/refund.svg`}/>
                <img className="clockImg" src={process.env.PUBLIC_URL + `/assets/clock.svg`}/>
            </div>
            <div>
                <Button className="homeBtn" a href="/">홈으로 이동</Button>
            </div>
        </div>
    );
}

export default RefundCompletePage;