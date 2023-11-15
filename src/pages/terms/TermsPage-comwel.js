import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaComwelTerms from "../../components/ScollableTextarea/ScrollableTextarea-comwel-terms";

const TermsPageComwel = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaComwelTerms />
        </div>
    );
}
export default TermsPageComwel;