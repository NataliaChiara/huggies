import '../Page2/Page2.css'
import foto1 from './Assets/foto-pregunta-1.png'
import nota1 from './Assets/nota-musical-1.png'
import nota2 from './Assets/nota-musical-2.png'
import nota3 from './Assets/nota-musical-3.png'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        when: "afterChildren",
    },
    visible: {
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        }
    }
}

const variants = {
    hidden: { opacity: 0, x: '-100vw' },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: 'spring',
            bounce: 0.3,
            when: "beforeChildren",
            staggerChildren: 0.3,
        }
    },
}

const Page2 = () => {
    return (
        <div className='page1'>
            <img src={nota1} className='notaMusical1'></img>
            <img src={nota2} className='notaMusical2'></img>
            <img src={nota3} className='notaMusical3'></img>
            <div className='element'>
                <div className='border'></div>
                <img className='image' src={foto1}></img>
            </div>
            <div className='text'>
                <div className='tracking'>
                    <div className='circle'>1</div>
                    <div className='circle2'></div>
                    <div className='circle2'></div>
                    <div className='circle2'></div>
                </div>
                <strong className='red'><h1>¿Qué es lo que más te gusta del momento de baño, bebé?</h1></strong>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"

                >
                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'>
                        La sensación de los pies en el agua
                    </motion.button>

                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'>
                        Nada, pataleo porque no me gusta
                    </motion.button>

                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'>
                        Los mimos acuáticos de mamá y papá
                    </motion.button>

                </motion.div>

                <strong className='red'><h1>#mixeáTuHumorBebé</h1></strong>
            </div>
            <div className='links'>
                <a>Huggies</a>|
                <a>Copyright © 2022</a>|
                <a>Términos y condiciones</a>|
                <a>Salir de Spotify</a>
            </div>
        </div>
    )
}

export default Page2