import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaComwelPrivacy from "../../components/ScollableTextarea/ScrollableTextarea-comwel-privacy";

const PrivacyPageComwel = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaComwelPrivacy />
        </div>
    );
}
export default PrivacyPageComwel;