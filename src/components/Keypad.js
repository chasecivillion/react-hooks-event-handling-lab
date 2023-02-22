// Code Keypad Component Here

function Keypad (){
    function changeEvent(){
        console.log("Entering password...")
    }
    return (
        <div>
            <input onChange={changeEvent} type="password" placeholder="Enter Password Here" />
        </div>
    )
}

export default Keypad;