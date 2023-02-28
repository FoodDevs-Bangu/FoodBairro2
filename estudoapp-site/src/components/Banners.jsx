import Carousel from 'react-bootstrap/Carousel'


function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".\src\img\porquin (1).jpg"
                        alt="Slide incrível"
                    />
                    <Carousel.Caption>
                        <h5>FoodBairro</h5>
                        <p>Pague mais barato no produto, sem a taxa do app !!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".\src\img\food.jpg"
                        alt="Outro slide incrível"
                    />
                    <Carousel.Caption>
                        <h5>Quais são as funcionalidades?</h5>
                        <p>Ache e avalie os estabelecimentos do seu bairro.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=".\src\img\comunidade.jpg"
                        alt="Último slide"
                    />
                    <Carousel.Caption>
                        <h5>Uma mão lava a outra </h5>
                        <p>
                            Fortaleça o comércio local do seu bairro !!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners