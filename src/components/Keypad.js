// Code Keypad Component Here

function Keypad (){
    function handleChange(){
        console.log("Entering password...")
    }

    return (
        <div>
            <input 
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="ENTER PASSWORD"
            />
        </div>
    )
}

export default Keypad;