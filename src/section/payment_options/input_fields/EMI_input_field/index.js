import React, {useState} from "react";
import EMIMain from "./EMI_main";
import AvailableEmi from "./check_available_EMI_option_input";
import EmiAccordion from './EMI_options/index';
import CardInputField from '../../input_fields/card_input_field/index';

const EmiInput = () => { 
    const [active, setActive] = useState('main');
    const handleActive = (val) => {
        setActive(val)
    }
    console.log(active)
    return (
            <>
            {active === "main" && <EMIMain handleActive={handleActive} />}
            {active === "AvailableEmi" && <AvailableEmi handleActive={handleActive} />}
            {active === "EmiAccordion" && <EmiAccordion handleActive={handleActive} />}
            {active === "CardInputField" && <CardInputField handleActive={handleActive}/>}
            </>
        
    )
}

export default EmiInput