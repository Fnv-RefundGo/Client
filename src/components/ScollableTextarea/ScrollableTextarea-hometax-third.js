import React, {Component} from 'react';
import '../../css/TermsPage.css';

class ScrollableTextareaHometaxThird extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '제3자정보제공동의\n' +
                '\n' +
                '국세청은 정보주체의 동의, 법률에 특별한 규정이 있는 경우 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.\n' +
                '\n' +
                '가. 용어의 정의\n' +
                '1. 연계정보(CI) : 특정 개인을 식별하기 위해 본인확인기관에서 생성한 암호화된 개인식별번호\n' +
                '2. 인증사업자 : 카카오, NHN페이코, 통신사패스, KB국민은행, 한국정보인증(삼성패스), 신한은행, 네이버 등 전자서명 서비스를 제공하는 사업자\n' +
                '3. 본인확인기관 : 코리아크레딧뷰로(KCB) 등 본인확인 서비스를 제공하는 사업자\n' +
                '\n' +
                '나. 제3자 제공에 관한 사항\n' +
                '1. 개인정보를 제공받는 자 : 인증사업자, 본인확인기관\n' +
                '2. 제공받는 자의 개인정보 이용목적 : 간편인증 시 본인확인 또는 전자서명\n' +
                '3. 제공하는 개인정보 항목 : 주민등록번호(외극인등록번호) 또는 생년월일(로그인 시), 성명, 휴대폰번호\n' +
                '4. 제공받는 자의 보유 및 이용기간 : 본인확인 또는 전자서명 후 즉시 파기위 개인정보의 제3자 제공 동의를 거부할 수 있습니다. \n' +
                '다만, 관련 홈택스 이용 목적에 따른 서비스의 제한이 있을 수 있습니다.',
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

export default ScrollableTextareaHometaxThird;