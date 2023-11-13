import React, { Component } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../css/LoginTypePage.css';

function LoginTypeSelection() {
    const [selectedOption, setSelectedOption] = React.useState('');
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextButtonClick = () => {
        if (selectedOption === 'individual') {
            navigate('/hometax-individual-infoInput');
        }
    };

    const isNextButtonDisabled = !selectedOption;

    return (
        <div className="business-type-container">
            <div
                className={`business-type-option ${selectedOption === 'individual' ? 'selected' : ''}`}
            >
                <label>
                    개인사업자
                    <input
                        type="radio"
                        value="individual"
                        checked={selectedOption === 'individual'}
                        onChange={handleOptionChange}
                    />
                </label>
            </div>
            <br />
            <div
                className={`business-type-option ${selectedOption === 'corporate' ? 'selected' : ''}`}
            >
                <label>
                    법인사업자
                    <input
                        type="radio"
                        value="corporate"
                        checked={selectedOption === 'corporate'}
                        onChange={handleOptionChange}
                    />
                </label>
            </div>
            <br /><br /><br />
            <Button className="nextB" disabled={isNextButtonDisabled} onClick={handleNextButtonClick}>
                다음
            </Button>
        </div>
    );
}

export default LoginTypeSelection;
