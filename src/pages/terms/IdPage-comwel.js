import React from 'react';
import '../../css/TermsPage.css';
import ScrollableTextareaComwelId from "../../components/ScollableTextarea/ScrollableTextarea-comwel-id";

const IdPageComwel = () => {
    return(
        <div>
            <img className="icon" src={process.env.PUBLIC_URL + `/assets/taxgo_logo.svg`}/>
            <ScrollableTextareaComwelId />
        </div>
    );
}
export default IdPageComwel;