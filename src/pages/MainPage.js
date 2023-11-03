import React from 'react';
import "../css/MainPage.css";
import {Carousel} from 'antd';
const contentStyle = {
    margin: 0,
    height : '160px',
    color: '#000',
    lineHeight : '160px',
    textAlign : 'center',
    background: '#364d79',
};

const MainPage = () => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    return (
        <div className="wrapper">
        <Carousel autoplay afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
        </Carousel>
        </div>
    );
};
export default MainPage;


