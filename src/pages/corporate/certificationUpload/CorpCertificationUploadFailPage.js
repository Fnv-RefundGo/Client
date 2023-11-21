import React from 'react';
import "../../../css/InfoInputPage.css";
import "../../../css/CorpInfoInputPage.css";
import "../../../css/CorpCertificationUploadPage.css";
import {Button, Popover, Steps} from "antd";
import {CloseCircleFilled, PlusCircleFilled} from "@ant-design/icons";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);

const CorpCertificationUploadFailPage = () => {
    return(
      <div>
          <div>
              <div style={{ width: "600px", margin: "0 auto"}}>
                  <Steps
                      current={2}
                      progressDot={customDot}
                      style={{marginTop:"10px",}}
                      items={[{title: '',}, {title: '',}, {title: '',}, {title: '',},]}
                  />
              </div>
              <div className="wrapper">
                  <a href="/corporate-infoInput">
                      <img className="backB" src={process.env.PUBLIC_URL + `/assets/back_button.png`}/>
                  </a><br/><br/><br/>
                  <div className="corp-text1">대상 사업장의 정보연계를 위해 각 사이트에<br/>등록된 <span className="cert">사업장 인증서</span>를 업로드해주세요.</div>
                  <br/><br/>
                  <div className="hometax-upload-contents">
                      <div className="hometax-cert-contents"><br/>
                          <div className="nonconnect-icon"> 미연계</div>
                          <div className="hometax-cert-text1">홈택스 인증서</div><br/>
                          <div className="hometax-cert-text2">홈택스 사이트에서 신고된<br/>현황내역을 수집하기 위한 인증서</div>
                      </div>
                      <div className="upload-certification">
                          <CloseCircleFilled className="circleX"/><br/>
                          <div className="cert-upload-fail-text">
                              사업장 인증서가 확인되지 않습니다.<br/>
                              해당 사이트에 인증서 업로드 확인 후 재시도 바랍니다.
                          </div>
                          <div className="re-upload">재업로드</div>
                      </div>
                  </div>
                  <div className="hometax-upload-contents2">
                      <div className="hometax-cert-contents"><br/>
                          <div className="nonconnect-icon"> 미연계</div>
                          <div className="hometax-cert-text1">고용•산재 인증서</div><br/>
                          <div className="hometax-cert-text2">고용•산재보험 토탈 사이트에서 신고된<br/>고용,산재 내역을 수집하기 위한 인증서</div>
                      </div>
                      <div className="upload-certification"> <PlusCircleFilled className="circlePlus" /><br/>인증서 가져오기</div>
                  </div>
                  <Button className="cert-upload-nextBtn" disabled>다음</Button>
              </div>
          </div>
      </div>
    );
}
export default CorpCertificationUploadFailPage;