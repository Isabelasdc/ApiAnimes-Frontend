'use client'

import Pagina from "@/app/components/Pagina";
import apiAnimes from "@/service/apiAnimes";
import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { BsArrowsFullscreen, BsArrowLeft } from 'react-icons/bs'; // Ícones de expansão e seta para a esquerda

export default function Page({ params }) {
    const [anime, setAnime] = useState({});

    useEffect(() => {
        apiAnimes.get(`/anime/${params.id}`).then(resultado => {
            setAnime(resultado.data.data);
        });
    }, [params.id]);

    // Função para voltar à página anterior
    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <Pagina titulo={anime.title}>
            {
                anime.mal_id &&
                <div>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Card border="danger">
                                <Card.Header className="text-center bg-danger text-white">
                                    Foto
                                </Card.Header>
                                <Card.Img variant="top" src={anime.images.jpg.image_url} />
                                <Card.Body className="text-center">
                                    <Button 
                                        variant="primary"
                                        href={anime.images.jpg.image_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center justify-content-center"
                                    >
                                        <BsArrowsFullscreen className="me-2" /> Ampliar
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Button 
                                variant="success" 
                                className="mt-3 d-flex align-items-center" 
                                onClick={handleGoBack}
                            >
                                <BsArrowLeft className="me-2" /> Voltar
                            </Button>
                        </Col>
                        <Col md={8}>
                            <Card border="danger">
                                <Card.Header className="text-center bg-danger text-white">
                                    {anime.title}
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text><b>Nome: </b>{anime.title}</Card.Text>
                                    <Card.Text><b>Episodios: </b>{anime.episodes}</Card.Text>
                                    <Card.Text><b>Status: </b>{anime.status}</Card.Text>
                                    <Card.Text><b>Ano: </b>{anime.year}</Card.Text>
                                    <Card.Text><b>Score: </b>{anime.score}</Card.Text>
                                    <Card.Text><b>Sinopse: </b>{anime.synopsis}</Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    </Row>
                </div>
            }
        </Pagina>
    );
}
