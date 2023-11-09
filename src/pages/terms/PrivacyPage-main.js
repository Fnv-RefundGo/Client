import React from 'react';
import ScrollableTextareaPrivacyMain from "../../components/ScrollableTextarea-privacy-main";
import '../../css/TermsPage.css';

const PrivacyPageMain = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaPrivacyMain />
        </div>
    );
}
export default PrivacyPageMain;