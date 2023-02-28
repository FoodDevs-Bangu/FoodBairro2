import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>
        
            <h1 style={{ paddingTop: "20px", textAlign: "center", }}>Sobre nós:</h1>
            <h3 style={{textAlign:"center"}}>
Somos uma empresa que dá sugestões de onde comer fast-food.
Ficar na dúvida de onde comer é mais comum do que se imagina, pois a gastronomia no bairro é praticamente uma atração à parte. Até mesmo quem frequenta e conhece bem o local passa por esse dilema. <br />
Para ajudar a montar seu roteiro de lanches bons e baratos no bairro, elaboramos esse aplicativo, FoodBairro, com referência de ótimos estabelecimentos para lanchar.
            </h3> <br />
            
    <img style={{margin:"auto"}} src="img/food.jpg" alt=""/> <br />
            
            
            <Depoimentos />
        </Container>
    );
}

export default Sobre