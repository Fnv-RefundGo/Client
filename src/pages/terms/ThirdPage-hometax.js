import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaHometaxThird from "../../components/ScrollableTextarea-hometax-third";

const ThirdPageHometax = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaHometaxThird />
        </div>
    );
}
export default ThirdPageHometax;