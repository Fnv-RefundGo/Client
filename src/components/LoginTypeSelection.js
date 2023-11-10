import React, { Component } from 'react';
import '../css/LoginTypePage.css';
import { Button } from 'antd';

class LoginTypeSelection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
        };
    }

    handleOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
        });
    };

    render() {
        const isNextButtonDisabled = !this.state.selectedOption;

        return (
            <div className="business-type-container">
                <div
                    className={`business-type-option ${
                        this.state.selectedOption === 'individual' ? 'selected' : ''
                    }`}
                >
                    <label>
                        개인사업자
                        <input
                            type="radio"
                            value="individual"
                            checked={this.state.selectedOption === 'individual'}
                            onChange={this.handleOptionChange}
                        />
                    </label>
                </div>
                <br/>
                <div
                    className={`business-type-option ${
                        this.state.selectedOption === 'corporate' ? 'selected' : ''
                    }`}
                >
                    <label>
                        법인사업자
                        <input
                            type="radio"
                            value="corporate"
                            checked={this.state.selectedOption === 'corporate'}
                            onChange={this.handleOptionChange}
                        />
                    </label>
                </div>
                <br/><br/><br/>
                <Button className="nextB" disabled={isNextButtonDisabled}>
                    다음
                </Button>
            </div>
        );
    }
}

export default LoginTypeSelection;
