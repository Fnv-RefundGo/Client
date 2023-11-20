import React from 'react';
import "../../../css/InfoInputPage.css";
import "../../../css/CorpInfoInputPage.css";
import "../../../css/CorpCertificationUploadPage.css";
import {Popover, Steps} from "antd";

const customDot = (dot) => (
    <Popover>{dot}</Popover>
);

const HometaxCorpCertificationUploadPage = () => {
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
              </div>
          </div>
      </div>
    );
}
export default HometaxCorpCertificationUploadPage;