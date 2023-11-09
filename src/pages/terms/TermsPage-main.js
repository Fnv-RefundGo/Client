import React from 'react';
import ScrollableTextareaTermsMain from '../../components/ScrollableTextarea-terms-main';
import '../../css/TermsPage.css';

const TermsPageMain = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaTermsMain />
        </div>
    );
}
export default TermsPageMain;