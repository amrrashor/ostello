//react icons
import { BsCreditCard, BsCashStack } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { BsBank2 } from 'react-icons/bs';
import { SiBitcoincash } from 'react-icons/si';


//various input fields
import CardInputField from './input_fields/card_input_field';
import UpiInputField from './input_fields/UPI_input_field';
import PaytmInputField from './input_fields/PayTm_input_field';
import NetbankingInputField from './input_fields/NetBanking_input_field';
import MobileWalletField from './input_fields/MobileWallets_input_field';

//caching icons and images
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
        input: <CardInputField />
    },
    {
        id: 2,
        title: "UPI",
        icon: UPI,
        input: <UpiInputField />
    },
    {
        id: 3,
        title: "PayTm",
        icon: PayTm,
        input: <PaytmInputField />
    },
    {
        id: 4,
        title: "Net Banking",
        icon: Banking,
        input: <NetbankingInputField />
    },
    {
        id: 5,
        title: "Mobile Wallets",
        icon: Wallet,
        input: <MobileWalletField />
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