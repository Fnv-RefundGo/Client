import React, {Component} from 'react';
import '../../css/TermsPage.css';

class ScrollableTextareaHometaxPrivacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '개인정보 이용 동의\n' +
                '\n' +
                '"국세청" 귀중\n' +
                '본인은 "국세청"(이하 ‘기관’이라 합니다)이 제공하는 간편인증서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 기관이 본인의 개인정보를 수집/이용하고, 개인정보의 취급을 위탁하는 것에 동의합니다.\n' +
                '\n' +
                '(1)수집항목\n' +
                '- 이용자의 성명, 생년월일, 이동전화번호\n' +
                '- 연계정보(CI), 중복가입확인정보(DI)\n' +
                '- 이용자가 이용하는 웹사이트 또는 Application 정보, 이용일시\n' +
                '- 내외국인 여부\n' +
                '- 가입한 간편인증 사업자\n' +
                '\n' +
                '(2)이용목적\n' +
                '- 이용자가 웹사이트 또는 Application에 입력한 본인확인 정보의 정확성 여부 확인 (본인확인서비스 제공) 및 본인인증(전자서명)\n' +
                '- 해당 웹사이트 또는 Application에 연계정보(CI)/중복가입확인정보(DI) 전송\n' +
                '- 서비스 관련 상담 및 불만 처리 등\n' +
                '- 이용 웹사이트 또는 Application 정보 등에 대한 분석 및 세분화를 통한, 이용자의 서비스 이용 선호도 분석\n' +
                '\n' +
                '(3)개인정보의 보유기간 및 이용기간\n' +
                '- 이용자가 서비스를 이용하는 기간에 한하여 보유 및 이용. 다만, 아래의 경우는 제외\n'+'- 법령에서 정하는 경우 해당 기간까지 보유(상세 사항은 회사의 개인정보취급방침에 기재된 바에 따름)\n' +
                '\n' +
                '(4)본인확인서비스 제공을 위한 개인정보의 취급위탁\n' +
                '- 수탁자 : "카카오, NHN페이코, 통신사패스, KB국민은행, 한국정보인증(삼성패스), 신한은행, 네이버"\n' +
                '- 취급위탁 업무 : 본인확인 정보의 정확성 여부 확인(본인확인서비스 제공), 본인인증 또는 전자서명, 연계정보(CI)/중복가입확인 정보(DI) 생성 및 전송, 서비스 관련 상담 및 불만 처리, 휴대폰인증보호 서비스, 이용자의 서비스 이용 선호도 분석정보 제공관련 시스템 구축 및 위탁영업 등\n' +
                '※ 수탁자의 상세 개인정보 취급 위탁 내용은 각 수탁자가 정하는 절차와 방법에 따라 수탁자 홈페이지 등에 게시된 수탁자의 개인정보 취급방침 및 제3자 제공 동의 방침 등에 따릅니다.\n' +
                '\n' +
                '(5)상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않으실 경우, 서비스를 이용하실 수 없습니다.\n' +
                '\n' +
                '* 기관이 제공하는 서비스와 관련된 개인정보의 취급과 관련된 사항은, 기관의 개인정보취급방침(기관 홈페이지 www.hometax.go.kr)에 따릅니다. 본인은 위 내용을 숙지하였으며 이에 동의합니다."카카오, NHN페이코, 통신사패스, KB국민은행, 한국정보인증(삼성패스), 신한은행, 네이버" 귀중귀사가 "국세청"으로부터 위탁 받아 제공하는 간편인증서비스와 관련하여 본인의 개인정보를 수집·이용하고자 하는 경우에는 「개인정보보호법」 제15조, 제22조, 제24조에 따라 본인의 동의를 얻어야 합니다. 이에 본인은 귀사가 아래와 같이 본인의 개인정보를 수집·이용하는데 동의합니다.\n' +
                '\n' +
                '(1)개인정보의 수집 및 이용 목적\n' +
                '- 홈택스 서비스(회원가입, 로그인, ID/PW찾기, 거래동의 등) 이용을 위한 본인확인, 본인인증 또는 전자서명, 식별확인 업무처리 및 정보제공\n' +
                '- "국세청"에 이용자 정보를 전송하여 본인확인 및 휴대폰 정보의 일치 여부 확인\n' +
                '- 휴대폰 사용자 확인을 위한 SMS(또는 LMS) 인증번호 전송- 부정 이용 방지 및 수사의뢰\n' +
                '- 이용자 본인 요청에 의한 본인확인 이력정보 제공, 민원처리, 추후 분쟁조정을 위한 기록보존, 고지사항 전달 등\n' +
                '- 부가서비스 제공 및 해제(서비스 가입자에 한함)\n' +
                '- 기타 법률에서 정한 목적\n' +
                '\n' +
                '(2)수집하는 개인정보의 항목\n' +
                '- 이용자의 휴대폰번호, 성명, 생년월일, 내/외국인 구분\n' +
                '- 연계정보(CI), 중복가입확인정보(DI) 정보\n' +
                '- 인증처 및 사이트 URL, 인증일시, IP주소 등\n' +
                '\n' +
                '(3)개인정보의 제공\n' +
                '- 제공 받는자 : 국세청- 제공 목적 : 간편인증서비스 업무대행(본인확인정보 및 연계정보 전송, 서비스 관련 업무 상담 및 불만처리 등)\n' +
                '- 제공 항목 : 성명, 생년월일, 휴대폰번호, 연계정보(CI)\n' +
                '- 보유 기간 : "제공받는 자"의 이용목적 달성 시 까지 보관하며, 세부사항은 각 사업자의 개인정보처리방침을 따름\n' +
                '\n' +
                '(4)개인정보의 보유 및 이용 기간\n' +
                '개인정보는 개인정보의 수집목적 또는 제공받은 목적이 소멸되면 파기됩니다. 단, ‘개인정보보호법’, ‘정보통신망 이용 촉진 및 정보보호 등에 관한 법률’, ‘신용정보의 이용 및 보호에 관한 법률’ 등 기타 관련 법령의 규정에 의하여 법률관계의 확인 등을 이유로 특정한 기간 동안 보유하여야 할 필요가 있을 경우 에는 아래에 정한 기간 동안 보유합니다.\n' +
                '- 신용정보의 이용 및 보호의 관한 법률에 의거 정보 보존 기간: 3년\n' +
                '- 계약 또는 청약철회 등에 관한 기록 : 5년\n' +
                '- 대금결제 및 재화 등의 공급에 관한 기록 : 5년\n' +
                '- 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년- 기타 다른 법률의 규정에 의하여 보유가 허용되는 기간\n' +
                '\n' +
                '(5)동의거부권리 및 거부에 따른 불이익 내용\n' +
                '개인정보 수집·이용 및 제공에 따른 동의는 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다. 다만, 동의 거부 시에는 서비스 이용이 제한될 수 있습니다.',
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

export default ScrollableTextareaHometaxPrivacy;