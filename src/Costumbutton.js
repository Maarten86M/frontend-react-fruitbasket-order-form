import './Costumbutton.css'

function CustomButton( {buttontype, onclick, buttonname}) {
    return (
        <>
            <button
                className="costumbutton"
                type={buttontype}
                onClick={onclick}
            >
                {buttonname}
            </button>
        </>
    )
}

export default CustomButton;