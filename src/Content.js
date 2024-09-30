import ColorBox from "./ColorBox"
import ColorEntry from "./ColorEntry"

const Content = ({ color, handleColorChange }) => {

    return (
        <div>
            <ColorBox
                color={color}
            />
            <ColorEntry
                color={color}
                handleColorChange={handleColorChange}
            />
        </div>
    )
}

export default Content