import Styles from "./Button.module.css"


// eslint-disable-next-line react/prop-types
function Buttons({ onButtonClick }) {

    const type = ["%", "C", "⬅️", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="]

    return (
        <div className={Styles.cantainer}>

            {type.map(names => <button key={names} className={Styles.button} onClick={() => onButtonClick(names)} >{names}</button>
            )}


        </div>
    )

}

export default Buttons