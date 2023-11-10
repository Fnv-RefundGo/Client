import React, {Component} from 'react';
import '../css/TermsPage.css';
import {Button} from "antd";

class ScrollableTextareaMarketing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '마케팅 활용 및 수신 동의\n\n' +
                '개인정보보호법 제22조 제4항에 의해 선택정보 사항에 대해서는 기재하지 않으셔도 서비스를 이용하실 수 있습니다.\n\n' +
                '1. 마케팅 및 광고에의 활용, 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 고객의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.\n' +
                '2. 경정청구 간편확인은 서비스를 운용함에 있어 각종 정보를 서비스 화면, 전화, e-mail, SMS(LMS), 우편물, 앱푸시 등의 방법으로 고객에게 제공할 수 있으며, 경정청구 간편확인의 카카오톡 알림톡 수신 등, 의무적으로 안내되어야 하는 정보성 내용은 수신동의 여부와 무관하게 제공됩니다.'
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
                    rows="32"
                    cols="60"
                    ref={(textarea) => (this.textarea = textarea)}
                    onChange={this.handleTextareaChange}
                    spellcheck="false"
                />
                <Button className="okButton" a href="/agree"> 확인 </Button>
            </div>
        );
    }
}

export default ScrollableTextareaMarketing;
