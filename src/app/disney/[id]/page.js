
'use client'

import Pagina from "@/app/components/Pagina"
import apiDisney from "@/services/apiDisney"
import { useEffect, useState } from "react"
import { Card, Col, ListGroup, Row } from "react-bootstrap"

export default function Page({ params }) {


    const [personsagem, setPersonagem] = useState({})

    useEffect(() => {
        apiDisney.get(`character/${params.id}`).then(resultado => {
            setPersonagem(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Disney Detalhes">

            {
                personsagem._id &&
                <div>
                    <Row className="mt-4">
                        <Col md={4}>
                            <img src={personsagem.imageUrl} />
                        </Col>
                        <Col>
                            <p><b>Nome: </b>{personsagem.name}</p>
                            <p><b>Data Criação: </b>{personsagem.createdAt}</p>
                            <p><a target="_blank" href={personsagem.sourceUrl}>Ver página oficial</a></p>
                        </Col>
                        <Col md={8} className="mt-3">
                            <Card border="primary" >
                                <Card.Header className="bg-primary text-white">Filmes</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                    {personsagem.films.map(item => (
                                    <ListGroup.Item>{item}</ListGroup.Item>
                                    ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mt-3">
                            <Card border="success" >
                                <Card.Header className="bg-primary text-white">tvShows</Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                    {personsagem.tvShows.map(item => (
                                    <ListGroup.Item>{item}</ListGroup.Item>
                                    ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>


            }

        </Pagina>
    )
}

