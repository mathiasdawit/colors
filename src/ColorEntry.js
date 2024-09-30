const ColorEntry = ({color, handleColorChange}) => {

    return (
        <form className='ColorEntry' >
             <input 
                type="text" 
                class="ColorEntry" 
                placeholder="Add Color Name"
                onChange={handleColorChange}            
             />
        </form>
    );
};

export default ColorEntry