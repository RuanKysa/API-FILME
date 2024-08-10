import { Filmetype } from "@/app/types"
import Estrela from "../Estrela/Estrela";
import './index.scss'

export interface Props {
    movie: Filmetype
}
export default function Card(props: Props) {
    const filme = props.movie;
    return (
        <li className='card'>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
            </div>
            <div className="info">
                <p
                    className="title">{filme.title}
                </p>
                {
                    filme.vote_average > 0 &&
                    <Estrela rating={filme.vote_average} />

                }
                <div className="hidden-content">
                    {filme.overview &&
                        <p
                            className='descricao'>{filme.overview.length > 100
                                ? `${filme.overview.substring(0, 100)}...`
                                : filme.overview
                            }
                        </p>
                    }


                    <button className="btn">Ver Mais</button>
                </div>
            </div>
        </li>
    )
}