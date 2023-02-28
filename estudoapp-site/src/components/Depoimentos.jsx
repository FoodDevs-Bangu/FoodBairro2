import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'>Depoimentos</h2>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src=".\src\img\Pedro-Raul-2.jpeg" alt="Foto do depoimento" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Pedro Raul</strong>
                <p>
                    "Excelente!!, acabei de meter 3 gols no flamengo.<br />
                    e posso achar uma opção de sobremesa perto de casa e pagando barato, depois de jantar o flamengo."
                </p>
            </Col>
        </Row>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src=".\src\img\elon.jpg" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Elon Musk</strong>
                <p>
                "Estou louco para comprar o FoodBairro.<br />
                    Finalmente uma opção que ajude o proprietário de verdade !!, agora vou comprar, monetizar a ideia e direi que é meu."
                </p>
            </Col>
        </Row>    
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src=".\src\img\andre.jpeg" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>André Rocha</strong>
                <p>
                "Agora posso comprar perto de casa e barato.<br />
                    tenho diversas opções perto de casa e não sabia, graças ao FoodBairro agora eu sei."
                </p>
            </Col>
        </Row>        
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
                <img src=".\src\img\jordan.jpg" alt="Foto do depoimento 2" className='rounded' />
            </Col>
            <Col sm="12" md="10">
                <strong>Michael B. Jordan - proprietário</strong>
                <p>
                "agora posso cadastrar meu trailer, sem pagar as taxas dos app.<br />
                    posso alavancar meu negócio no bairro sem ser refém de taxas abusivas dos app de comida."
                </p>
            </Col>
        </Row>            
        </>
    )
}

export default Depoimentos