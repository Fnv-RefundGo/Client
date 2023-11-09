import React from 'react';
import ScrollableTextareaTerms from '../../components/ScrollableTextarea-terms';
import '../../css/TermsPage.css';

const TermsPage = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaTerms />
        </div>
    );
}
export default TermsPage;