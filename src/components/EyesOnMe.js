// Code EyesOnMe Component Here
function EyesOnMe (){

    function onFocus() {
        console.log("Good!")
    }
    function onBlur() {
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button onFocus={onFocus} onBlur={onBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;