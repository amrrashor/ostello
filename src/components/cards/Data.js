import { BsCreditCard, BsCashStack } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { BsBank2 } from 'react-icons/bs';
import { SiBitcoincash } from 'react-icons/si';
import InputField from '../input/Index';

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
    },
    {
        id: 2,
        title: "UPI",
        icon: UPI,
    },
    {
        id: 3,
        title: "PayTm",
        icon: PayTm,
    },
    {
        id: 4,
        title: "Net Banking",
        icon: Banking,

    },
    {
        id: 5,
        title: "Mobile Wallets",
        icon: Wallet,
    },
    {
        id: 6,
        title: "EMI",
        icon: EMI,
    },
    {
        id: 7,
        title: "No-cost Loan",
        icon: Rubee,
    },
]

export default cardData