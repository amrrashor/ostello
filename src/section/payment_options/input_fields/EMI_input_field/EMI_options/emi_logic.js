// import React, {useState} from "react";
// import './style.css';

// const EmiOptions = ({currentValue}) => {
//     const [toggle, setToggle] = useState(false);
//     return (
//         <div className="shadow-2 rounded-3xl p-9 md:h-screen">
//                 <div>

//                     <div>
//                         <h3 className="font-color-one my-7 text-xl font-medium">No Cost EMI</h3>
//                         <div onClick={() => setToggle(!toggle)} key={currentValue.id} className=" justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
//                             <div className="text-lg font-normal font-color-one">{currentValue.duration}  </div>
//                             <div className="font-color-one text-2xl font-bold">{ currentValue.amount} <span className="font-normal per text-lg">{currentValue.per}</span></div>                            
//                     </div>
//                     {toggle && <div>
//                         dthr
//                     </div>}
//                     </div>

//                     <div>
//                         <h3 className="font-color-one my-7 text-xl font-medium">EMI with interest</h3>
//                         <div onClick={() => setToggle(!toggle)} key={currentValue.id} className="justify-between w-full p-5 rounded-lg border border-gray-300 my-3">
//                             <div className="text-lg font-normal font-color-one">{currentValue.duration} </div>
//                             <div className="font-color-one text-2xl font-bold">{currentValue.amount} <span className="font-normal per text-lg">{currentValue.per}</span></div>
//                             <div className="tetx-lg per font-medium text-right">{ currentValue.rate }</div>
//                         </div>
//                         {toggle && <div>
//                             conttee
//                         </div>}
//                     </div>

//                 </div>
//         </div>
//     )
// }

// export default EmiOptions