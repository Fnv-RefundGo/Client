import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaHometaxPrivacy from "../../components/ScrollableTextarea-hometax-privacy";

const PrivacyPageHometax = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaHometaxPrivacy />
        </div>
    );
}
export default PrivacyPageHometax;