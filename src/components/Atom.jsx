
const Atom= ({onClick, width, height, src}) => {
    return (

        <img onClick={onClick} src={src} alt='Atom' width={width} height={height}/>

    )
}

export default Atom