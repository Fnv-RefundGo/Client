import React from "react";
import {Button, Carousel} from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "../css/MainPage.css";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";


const MainPage = () => {
    const settings = {
        dots: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const navigate = useNavigate();
    const goOnIdentificationPage = () => {
        navigate("/kakao-identification");
    }

    return (
        <div className="custom-carousel-container">
            <Carousel {...settings}>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/refund.svg`}/>
                    <br/>
                    <div className="mainText">
                        <div>환급Go와 함께 잊고 있던</div>
                        <div>환금액을 찾아보세요</div>
                    </div>
                    <br/>
                </div>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/alarm.svg`}/>
                    <br/>
                    <div className="mainText">
                        <div>환급신청 잊어도 걱정마세요.</div>
                        <div>환급Go가 챙겨드려요!</div>
                    </div>
                    <br/>
                </div>
                <div>
                    <br/>
                    <img className="mainImg" src={process.env.PUBLIC_URL + `/assets/clock.svg`}/>
                    <br/>
                    <div className="mainText">
                        <div>1분이면 신청완료!</div>
                        <div>환급Go와 환급액 찾기</div>
                        <div>시작해볼까요?</div>
                    </div>
                    <br/>
                </div>
            </Carousel>
            <Button className="nextBtn" onClick={goOnIdentificationPage}> 다음 </Button>
            <Footer/>
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
