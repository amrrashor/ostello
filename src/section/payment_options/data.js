import { BsCreditCard, BsCashStack } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { BsBank2 } from 'react-icons/bs';
import { SiBitcoincash } from 'react-icons/si';

const Card = <BsCreditCard />
const Wallet = <BiWallet />
const Banking = <BsBank2 />
const EMI = <BsCashStack />
const Rubee = <SiBitcoincash />
const UPI = <img src="/assets/UPI.png" />
const PayTm = <img src="/assets/PayTm.png" />

const cardData = [
    {
        id: 1,
        title: "Card",
        icon: Card,
        input: "input 1"
    },
    {
        id: 2,
        title: "UPI",
        icon: UPI,
        input: "input 2"
    },
    {
        id: 3,
        title: "PayTm",
        icon: PayTm,
        input: "input 3"
    },
    {
        id: 4,
        title: "Net Banking",
        icon: Banking,
        input: "input 4"
    },
    {
        id: 5,
        title: "Mobile Wallets",
        icon: Wallet,
        input: "input 5"
    },
    {
        id: 6,
        title: "EMI",
        icon: EMI,
        input: "input 6"
    },
    {
        id: 7,
        title: "No-cost Loan",
        icon: Rubee,
        input: "input 7"
    },
]

export default cardData