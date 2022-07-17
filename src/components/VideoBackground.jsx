import styled from "styled-components"


const VideoBackground = ({src}) => {
    
    const Vid = styled.video`
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
        `
        

        const Overlay = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #0000005c;
        backdrop-filter: blur(3px);
    `

    return (
        
        <>
            <Vid src={src} muted loop autoPlay></Vid>
            <Overlay/>

        </>
    )
}
export default VideoBackground