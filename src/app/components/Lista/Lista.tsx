'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import Card from '../Card/Card';
import { Filmetype } from '@/app/types';

export default function Lista() {
    const [filme, setFilme] = useState<Filmetype[]>([]);

    useEffect(() => {
        getFilmes();
    }, []);

    const getFilmes = () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'e27d5a0815a0ef7d538fb2929fb0705b',
                language: 'pt-BR'
            }
        }).then(response => {
            setFilme(response.data.results);
        }).catch(error => {
            console.error('Error fetching movies:', error);
        });
    };

    return (
        <ul className="list">
            {filme.map((filme) => (
                <Card key={filme.id} movie={filme} />
            ))}
        </ul>
    );
}
