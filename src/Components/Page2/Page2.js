import '../Page2/Page2.css'
import foto1 from './Assets/foto-pregunta-1.png'
import foto2 from './Assets/foto-pregunta-2.png'
import foto3 from './Assets/foto-pregunta-3.png'
import foto4 from './Assets/foto-pregunta-4.png'
import nota1 from './Assets/nota-musical-1.png'
import nota2 from './Assets/nota-musical-2.png'
import nota3 from './Assets/nota-musical-3.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

    let [count, setCount] = useState(0)
    const [foto, setFoto] = useState(foto1)
    const [opcion1, setOpcion1] = useState('La sensación de los pies en el agua')
    const [opcion2, setOpcion2] = useState('Nada, pataleo porque no me gusta')
    const [opcion3, setOpcion3] = useState('Los mimos acuáticos de mamá y papá')
    const [title, setTitle] = useState('¿Qué es lo que más te gusta del momento del baño, bebé?')


    useEffect(() => {
        console.log(count)
        if (count === 1) {
            setFoto(foto2)
            setTitle('Cuando llega el momento de que te cambien el pañal…')
            setOpcion1('Me da gracia el fresquito del aire en la cola')
            setOpcion2('Grito porque estoy incómodo y con frío')
            setOpcion3('Me encanta porque me dan muchos besos')
        }
        if (count === 2){
            setFoto(foto3)
            setTitle('¿Qué haces cuando tu mamá te da la teta o la mamadera?')
            setOpcion1('Tomás tranqui y le hacés muecas')
            setOpcion2('Llorás y no querés tomar nada')
            setOpcion3('Tomás despacito y te dormís en sus brazos')
        }
        if (count === 3){
            setFoto(foto3)
            setTitle('Cuando tus papás te cantan y hacen un show solo para vos…')
            setOpcion1('Te sorprendés y te movés con ellos')
            setOpcion2('Gritás molesto porque hacen mucho ruido')
            setOpcion3('Sonreís porque empezás a reconocer sus voces')
        }

    }, [count])

    function click() {
        setCount(count + 1)
    }



    return (
        <div className='page1'>
            <img src={nota1} className='notaMusical1'></img>
            <img src={nota2} className='notaMusical2'></img>
            <img src={nota3} className='notaMusical3'></img>
            <div className='element'>
                <div className='border'></div>
                <img className='image' src={foto}></img>
            </div>
            <div className='text'>
                <div className='tracking'>
                    <div className='circleActive'>1</div>
                    <div className='circlePassive'>2</div>
                    <div className='circlePassive'>3</div>
                    <div className='circlePassive'>4</div>
                </div>
                <strong className='red'><h1>{title}</h1></strong>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={count}

                >
                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'
                        onClick={click}>
                        {opcion1}
                    </motion.button>

                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'
                        onClick={click}>
                        {opcion2}
                    </motion.button>

                    <motion.button
                        variants={variants}
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 4px gray"
                        }}
                        className='button2'
                        onClick={click}>
                        {opcion3}
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