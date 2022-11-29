import '../page1/page1.css'
import foto1 from './Assets/foto-1.png'
import product from './Assets/producto.png'
import nota1 from './Assets/nota-musical-1.png'
import nota2 from './Assets/nota-musical-2.png'
import nota3 from './Assets/nota-musical-3.png'

const Page1 = () => {
    return (
        <div className='page1'>
            <img src={nota1} className='notaMusical1'></img>
            <img src={nota2} className='notaMusical2'></img>
            <img src={nota3} className='notaMusical3'></img>
            <div className='element'>
                <div className='border'></div>
                <img className='image' src={foto1}></img>
                <img className='image2' src={product}></img>
            </div>
            <div className='text'>
                <strong><h1>#mixeáTuHumorBebé</h1></strong>
                <strong><h1 className='red'>¿Sabías que la música cambia tu estado de ánimo, bebé?</h1></strong>
                <p>Acompañamos cada uno de tus primeros momentos<br></br>
                    ¡Y también tus primeras emociones!</p>
                <strong><p>Descubrilas en nuestra trivia.</p></strong>
            </div>
            <button className='button'>COMENZAR</button>
            <div className='links'>
                <a>Huggies</a>|
                <a>Copyright © 2022</a>|
                <a>Términos y condiciones</a>|
                <a>Salir de Spotify</a>
            </div>
        </div>
    )
}

export default Page1