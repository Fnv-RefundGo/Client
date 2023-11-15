import React, {Component} from 'react';
import '../../css/TermsPage.css';

class ScrollableTextareaComwelThird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '제3자정보 제공 동의\n' +
                '\n' +
                '고용산재보험 토탈서비스(근로복지공단)에서는 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.\n' +
                '\n' +
                '가. 제3자 제공에 관한 사항\n' +
                '1. 제공받는자 : 인증사업자, 본인확인기관\n' +
                '2. 제공 목적 : 간편인증 시 인증 및 전자서명\n' +
                '3. 제공하는 개인정보 : 주민등록번호(외국인등록번호), 생년월일, 성명, 휴대폰번호, 통신사\n4. 보유기간 : 인증 또는 전자서명 후 즉시 파기\n' +
                '\n' +
                '나. 개인정보의 제3자 제공 동의\n' +
                '이용자는 개인(신용)정보의 선택적인 제공에 대한 동의를 거부할 수 있습니다. 서비스 제공을 위해 필요한 최소한의 개인정보이므로 동의를 해주셔야 "서비스" 이용이 가능합니다.',
        };
    }

    componentDidMount() {
        this.textarea.value = this.state.text;
    }

    handleTextareaChange = (event) => {
        this.setState({text: event.target.value});
    };

    render() {
        return(
            <div className="textarea-container">
                <textarea
                    className="textarea"
                    rows="35"
                    cols="60"
                    ref={(textarea) => (this.textarea = textarea)}
                    onChange={this.handleTextareaChange}
                    spellcheck="false"
                />
            </div>
        );
    }
}

export default ScrollableTextareaComwelThird;