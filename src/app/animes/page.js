'use client'

import Pagina from "@/app/components/Pagina"
import apiAnimes from "@/service/apiAnimes"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { FaSearch } from 'react-icons/fa'; // Importa o ícone de lupa
import Link from 'next/link'; // Importa o componente Link do Next.js

export default function Page() {

    const [animes, setAnimes] = useState([])

    useEffect(() => {
        apiAnimes.get('/anime').then(resultado => {
            setAnimes(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Animes">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Detalhes</th>
                        <th>Título</th>
                        <th>Duração</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map(item => (
                        <tr key={item._id}>
                            <td>
                                {/* Link para a página de detalhes com o ícone de lupa */}
                                <Link href={`/animes/${item.mal_id}`} >
                                    <FaSearch style={{ cursor: 'pointer' }} />
                                </Link>

                            </td>
                            <td>{item.title}</td>
                            <td>{item.duration}</td>
                            <td>{item.year}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}
