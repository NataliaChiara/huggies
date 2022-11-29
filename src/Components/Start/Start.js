import '../Start/Start.css'
import logoHuggies from './Assets/logo-huggies-copia.png'
import logoSpotify from './Assets/logo-spotify.png'
import header from './Assets/header.png'

const Start = () => {

    return (
        <div className="headerContainer">
            <div className="header">
                <img src={logoHuggies} className="logoHuggies"></img>
                <p className="spotify">ESCUCHA EN<img src={logoSpotify} className="logoSpotify"></img></p>
            </div>
            <img src={header} className='wave'></img>
        </div>

    )
}

export default Start