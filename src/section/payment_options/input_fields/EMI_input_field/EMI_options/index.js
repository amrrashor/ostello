import React,{useState} from "react";
import EmiOptions from "./emi_logic";
import Data from './data';

const EmiAccordion = ({handleActive}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="shadow-2 rounded-3xl p-9 md:h-screen">
        <div>

            <div>
                    <h3 className="font-color-one my-7 text-xl font-medium">No Cost EMI</h3>
                    {
                        Data?.NoCostEmi?.map((item) => (
                            <EmiOptions currentValue={item} handleActive={handleActive}/>
                        ))
                    }
            </div>

            <div>
                <h3 className="font-color-one my-7 text-xl font-medium">EMI with interest</h3>
                {
                        Data?.EmiWithInterest?.map((item) => (
                            <EmiOptions currentValue={item}  handleActive={handleActive} />
                        ))
                    }
            </div>

        </div>
</div>
    )
}

export default EmiAccordion 