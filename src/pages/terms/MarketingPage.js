import React from 'react';
import ScrollableTextareaMarketing from "../../components/ScollableTextarea/ScrollableTextarea-marketing";
import '../../css/TermsPage.css';

const MarketingPage = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaMarketing />
        </div>
    );
}
export default MarketingPage;