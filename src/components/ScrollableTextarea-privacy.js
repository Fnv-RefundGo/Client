import React, {Component} from 'react';
import '../css/TermsPage.css';
import {Button} from "antd";

class ScrollableTextareaPrivacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '개인정보 수집 및 이용 동의\n' +
                '\n' +
                '주식회사 자비스앤빌런즈(이하 “회사”)는 “개인정보 보호법”, “전자상거래 등에서의 소비자보호에 관한 법률”, “정보통신망 이용촉진 및 정보보호 등에 관한 법률” 등 관련 법령에 따라 이용자의 개인정보를 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 개인정보처리방침에 따라 개인정보를 처리하고 있습니다.\n' +
                '\n' +
                '1. 개인정보처리 방침\n' +
                '\n' +
                '개인정보처리 방침의 목적\n' +
                '모든 개인정보는 법률에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리하기 위하여 본 개인정보처리방침을 마련하여 준수하고 있습니다. 회사는 모든 개인정보를 소중히 다루며, 이용자 모두가 안심하고 서비스를 이용할 수 있도록 최선의 노력을 다할 것을 약속합니다.\n' +
                '\n' +
                '회사의 노력\n' +
                '구체적으로 회사는 개인정보 처리와 관련하여 다음의 노력을 하고 있습니다.\n' +
                '• 이용자의 개인정보를 암호화하고 있습니다.\n' +
                'ㆍ 정보주체의 개인정보는 비밀번호는 암호화되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.\n' +
                '• 해킹이나 컴퓨터 바이러스로부터 보호하기 위하여 방어 시스템을 갖추고 있습니다.\n' +
                'ㆍ 회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.\n' +
                '• 이용자의 개인정보에 접근할 수 있는 사람을 최소화하고 교육하고 있습니다.\n' +
                'ㆍ 개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 개인정보가 포함된 서류, 보조저장매체 등을 잠금 장치가 있는 안전한 장소에 보관하고 있습니다.\n' +
                '• 임직원에게 이용자의 개인정보 보호에 대해 정기적인 교육을 실시하고 있습니다.\n' +
                'ㆍ 개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.\n' +
                '• 정기적인 자체 감사를 실시하고 있습니다.\n' +
                'ㆍ 개인정보 취급 관련 안정성 확보를 위해 정기적(반기 1회)으로 자체 감사를 실시하고 있습니다.\n' +
                '\n' +
                '2. 개인정보 수집 및 이용\n' +
                '\n' +
                '수집항목\n' +
                '회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 어플리케이션을 통해 아래와 같은 서비스를 제공하기 위하여 필요한 최소한의 개인 정보를 수집하고 있습니다.\n' +
                '\n' +
                '수집 방법\n' +
                '회사는 다음과 같은 방법을 통해 개인정보를 수집합니다.\n' +
                '• 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우\n' +
                '• 회원가입 및 서비스 이용을 위하여 이용자가 회사에게 직접 개인정보 조회 등에 대한 권한을 위임하면 회사가 직접 국세청, 고용보험 등을 조회하는 경우\n' +
                '\n' +
                '보관 기간\n' +
                '회사는 이용자의 서비스 마지막 이용일 또는 회원 탈퇴 후 1년이 되는 시점 또는 법령에 따른 보존 기간이 경과되는 시점에 보관하던 해당 이용자의 모든 개인정보를 삭제합니다.\n' +
                '\n' +
                '3. 개인정보 제공\n' +
                '위탁업체 제공\n' +
                '회사의 서비스 제공을 위해 협력하는 외부 위탁업체에게 회사는 업무 수행을 위하여 필요한 범위내에서 개인정보 처리를 위탁하고 있습니다.\n' +
                '\n' +
                '회사는 서비스 제공의 안정성과 최신 기술을 이용자에게 제공하기 위해 국외에 개인정보를 위탁하고 있으며, 이용자로부터 취득 또는 생성한 개인정보를 AWS (Amazon Web Services Inc.)가 보유하고 있는 데이터베이스에 저장합니다. AWS는 해당 서버의 물리적인 관리만을 행하고, 이용자의 개인정보에 접근할 수 없습니다. 이용자는 회사의 개인정보보호책임자 및 담당부서를 통해 개인정보의 국외 이전을 거부할 수 있습니다. 이용자가 개인정보의 국외 이전을 거부하는 경우 회사는 해당 이용자의 개인정보를 국외 이전 대상에서 제외합니다. 다만, 이 경우 회사의 서비스 중 개인정보 국외 이전이 필수적으로 수반되는 서비스의 이용이 제한될 수 있습니다.\n' +
                '\n' +
                '4. 개인정보 파기\n' +
                '회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.\n' +
                '\n' +
                '파기절차\n' +
                '이용자가 입력한 정보는 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.\n' +
                '\n' +
                '파기기한\n' +
                '이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는 보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을 때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일 이내에 그 개인정보를 파기합니다.\n' +
                '\n' +
                '파기방법\n' +
                '전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이로 출력된 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.\n' +
                '\n' +
                '5. 개인정보 자동수집 장치의 설치운영 및 거부에 관한 사항\n' +
                '회사는 이용자에게 특화된 맞춤서비스를 제공하기 위해서 이용자들의 정보를 수시로 저장하고 불러오는 \'쿠키(cookie)\'를 운용하는 경우가 있습니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.\n' +
                '\n' +
                '사용 목적\n' +
                '이용자가 회사 웹사이트에 방문할 경우 웹사이트 서버는 이용자의 디바이스에 저장되어 있는 쿠키의 내용을 읽어 이용자의 환경설정을 유지하고 맞춤화된 서비스를 제공하게 됩니다.물론 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 이용자는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.회사는 Google, Inc.(이하 "Google"이라 합니다)가 제공하는 서비스인 Google Analytics를 이용해 이용자의 서비스 사용을 분석합니다. Google은 회사를 대신해 정보를 처리하여 이용자의 서비스 사용을 분석합니다. Google은 이 과정에서 개인 식별이 가능한 어떠한 정보도 처리하지 않습니다.회사는 다음 각 호와 같은 목적으로 이용자의 휴대폰 기기 종류, OS 타입, IP 주소, 단말기 아이디 등의 기기 정보를 수집합니다. 또한 광고 식별자 등 기기에서 자동적으로 생성된 정보를 수집합니다.\n' +
                '\n' +
                '가. 서비스의 비인가 또는 부정 사용 예방\n' +
                '나. 이용자 기기에 최적화된 서비스 제공\n' +
                '다. 금융거래정보와 연계한 이용자 행동 분석Google의 정보 처리를 원하지 않는 경우\n' +
                ' \n' +
                'tools.google.com/dlpage/gaoptout에서 현재 이용자의 웹 브라우저에 대한 부가 기능을 다운로드 및 설치하여 Google의 정보 처리를 거부할 수 있습니다. Google의 정보 처리에 관한 보다 자세한 내용은 www.google.com/analytics/learn/privacy을 참고하시기 바랍니다.\n' +
                '\n' +
                '쿠키설정거부방법\n' +
                '쿠키 설정을 거부하는 방법으로는 이용자가 사용하는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부하는 방법이 있습니다. (설정방법:)단, 쿠키 설치를 거부하였을 경우 로그인이 필요한 일부 서비스 이용에 어려움이 있을 수 있습니다.\n' +
                '\n' +
                '1. 안드로이드폰 : 구글설정 광고 → 광고 맞춤 설정 선택 또는 해제\n' +
                '2. 아이폰 : 아이폰설정 → 개인정보보호 → 광고 → 광고 추적 제한\n' +
                '3. 인터넷 익스플로어: 웹 브라우저 상단의 도구 >인터넷 옵션 >개인정보\n' +
                '\n' +
                '6. 가명정보 처리에 관한 사항\n' +
                '회사는 수집한 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가 정보가 없이는 특정 개인을 알아볼 수 없도록 가명처리하여 이용하는 경우, 원래의 상태로 복원하기 위한 추가 정보를 별도로 분리하여 보관ㆍ관리하는 등 해당 정보가 분실ㆍ도난ㆍ유출ㆍ위조ㆍ변조 또는 훼손되지 않도록 안전성 확보에 필요한 기술적ㆍ관리적 및 물리적 조치를 취하고 있으며, 가명정보의 처리 목적, 제3자 제공 시 제공받는 자 등 가명정보의 처리 내용을 관리하기 위하여 관련 기록을 작성하여 보관합니다.\n' +
                '\n' +
                '7. 기타사항\n' +
                '\n' +
                '이용자의권리\n' +
                '이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 수집・이용에 대한 동의 철회 또는 가입 해지를 요청할 수 있습니다.\n' +
                '\n' +
                '개인정보수정 및 삭제\n' +
                '이용자는 자신의 개인정보에 대한 수정 및 삭제를 요청할 수 있습니다. 수정의 경우 회사는 수정 완료 전까지 해당 개인정보의 이용을 중지하며, 삭제의 경우 요청 즉시 개인정보를 삭제합니다. 위 항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행령에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 개인정보를 이용하거나 제공하지 않습니다.회사는 정보주체 권리에 따른 열람의 요구, 정정삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다. 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제5항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다. 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.\n' +
                '\n' +
                '개인정보보호책임자\n' +
                '• 책임자: 이민우 회계사\n' +
                '• 담당부서: 개인정보보호팀\n' +
                '• 연락처: 010-4098-9038/ minwoo.lee@jptaxteam.com\n' +
                '\n' +
                '개인정보보호담당자\n' +
                '• 담당자: 박진주 담당자\n' +
                '• 담당부서: 개인정보보호팀\n' +
                '• 연락처: 010-8990-9038/ jp.tax.team@gmail.com\n' +
                '회사의 서비스 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.정보주체의 문의에 대해 지체 없이 답변 및 처리해드리겠습니다.개인정보가 침해되어 이에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하셔서 도움을 받으실 수 있습니다.\n' +
                '\n' +
                '개인정보침해 신고센터\n' +
                '• (국번없이)118\n' +
                '• https://privacy.kisa.or.kr개인정보 분쟁조정위원회\n' +
                '• 소관업무: 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)\n' +
                '• 홈페이지: www.kopico.go.kr\n' +
                '• 전화: (국번없이) 1833-6972\n' +
                '• 주소: (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층대검찰청 사이버수사과\n' +
                '• (국번없이)1301\n' +
                '• cid@spo.go.kr경찰청 사이버안전국\n' +
                '• (국번없이)182\n' +
                '• https://cyberbureau.police.go.kr \n' +
                '\n' +
                '8. 개인정보처리 방침변경\n' +
                '회사는 법률이나 서비스의 변경에 따라 개인정보처리방침을 개정할 수 있습니다. 개인정보처리방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다. 변경된 개인정보처리방침은 게시한 날로부터 7일 후부터 효력이 발생합니다.\n' +
                '\n' +
                '• 공고일자: 2022년 8월 1일\n' +
                '• 시행일자: 2022년 8월 1일\n' +
                '이 개인정보처리방침은 2022년 8월 8일부터 적용됩니다.'
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
                    rows="38"
                    cols="60"
                    ref={(textarea) => (this.textarea = textarea)}
                    onChange={this.handleTextareaChange}
                    spellcheck="false"
                />
                <Button className="okButton" a href="/agree">확인</Button>
            </div>
        );
    }
}

export default ScrollableTextareaPrivacy;