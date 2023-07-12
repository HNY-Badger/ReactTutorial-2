import { useRef } from 'react'

const VideoPlayer = ({src, ...props}) => {
    const ref = useRef<HTMLVideoElement>(null)
    const handlePlay = () => {
        ref?.current?.play()
    }
    const handlePause = () => {
        ref?.current?.pause()
    }

    return (
        <div>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
            <video 
                src={src} 
                ref={ref} 
                {...props}
                width='300'
            />
        </div>
    )
}

export default VideoPlayer