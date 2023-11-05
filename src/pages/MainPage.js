import React from "react";
import { Carousel } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "../css/MainPage.css";

const MainPage = () => {
    const settings = {
        dots: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="custom-carousel-container">
            <Carousel {...settings}>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/refund.svg`}/>
                    <br/>
                    <div className="text">
                        <div>환급Go와 함께 잊고 있던</div>
                        <div>환금액을 찾아보세요</div>
                    </div>
                    <br/>
                </div>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/alarm.svg`}/>
                    <br/>
                    <div className="text">
                        <div>환급신청 잊어도 걱정마세요.</div>
                        <div>환금Go가 챙겨드려요!</div>
                    </div>
                    <br/>
                </div>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/clock.svg`}/>
                    <br/>
                    <div className="text">
                        <div>1분이면 신청완료!</div>
                        <div>환급Go와 환급액 찾기</div>
                        <div>시작해볼까요?</div>
                    </div>
                    <br/>
                </div>
            </Carousel>
            <img className="nextBtn" src={process.env.PUBLIC_URL + `/assets/next button.svg`}/>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`custom-carousel-button custom-prev ${className}`} onClick={onClick}>
            <LeftCircleOutlined />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`custom-carousel-button custom-next ${className}`} onClick={onClick}>
            <RightCircleOutlined />
        </div>
    );
};

export default MainPage;
