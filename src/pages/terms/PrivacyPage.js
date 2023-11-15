import React from 'react';
import ScrollableTextareaPrivacy from "../../components/ScollableTextarea/ScrollableTextarea-privacy";
import '../../css/TermsPage.css';

const PrivacyPage = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaPrivacy />
        </div>
    );
}
export default PrivacyPage;