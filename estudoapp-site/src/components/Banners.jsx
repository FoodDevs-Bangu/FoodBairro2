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
                    <h5 style={{ color: "white" }}>FoodBairro</h5>
                    <p style={{ color: "white" }}>Pague mais barato no produto, sem a taxa do app !!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\food.jpg"
                    alt="Outro slide incrível"
                />
                <Carousel.Caption>
                    <h5 style={{ color: "white" }}>Quais são as funcionalidades?</h5>
                    <p style={{ color: "white" }}>Ache e avalie os estabelecimentos do seu bairro.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src=".\src\img\comunidade.jpg"
                    alt="Último slide"
                />
                <Carousel.Caption>
                    <h5 style={{ color: "white" }}>Uma mão lava a outra </h5>
                    <p style={{ color: "white" }}>
                        Fortaleça o comércio local do seu bairro !!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Banners