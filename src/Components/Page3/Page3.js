import video from './Assets/videoanalyze.mp4'

const Page3 = () => {
    return(
        <div>
            <div className="videoContainer">
            <div className='borderVideo'></div>
                <video width="300px" src={video} autoPlay></video>
            </div>
        </div>
    )
}

export default Page3