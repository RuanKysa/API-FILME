import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import './index.scss'


export interface Props {
    rating: number;
}

export default function Estrela(props: Props) {
    const numEstrela = Math.round(props.rating / 2)

    const fullestrela = [];
    const emptyestrela = [];

    for (let i = 0; i < 5; i++) {
        if (i < numEstrela) {
            fullestrela.push(i);
        } else {
            emptyestrela.push(i);
        }
    }

    return (
        <div className="rate">
            {fullestrela.map(index =>  <IoIosStar key={index} />)}
            {emptyestrela.map(index =>  <IoIosStarOutline key={index} />)}
        </div>
    )
}