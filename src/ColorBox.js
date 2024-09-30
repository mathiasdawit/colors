const ColorBox = ({color}) => {

    return (
        <div 
            className='ColorBox'
            style={{ backgroundColor: color }}
        >
            {color === '' ? <p>No Input</p> : color}
        </div>
    )
}

export default ColorBox