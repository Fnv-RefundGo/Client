import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaComwelThird from "../../components/ScollableTextarea/ScrollableTextarea-comwel-third";

const ThirdPageComwel = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaComwelThird />
        </div>
    );
}
export default ThirdPageComwel;