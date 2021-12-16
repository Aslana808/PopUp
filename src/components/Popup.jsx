import React, {useState} from 'react'

function Popup() {
    const [popup, setPopup] = useState(false)

    const changePopup = () => {
        setPopup(!popup)
    }
    return (
        <div className="main">
            <h1>PopUp</h1>
            <button className='open-btn' onClick={changePopup}>Activate PopUp</button>
            {popup ? (
                // ქვემოთ მოცემულ div ზე დაჭერისას  ვიყენებ ChangePopup ფუნქციას, popup ის გარეთ დაჭერის 
                // შემთხვევაში სთეითი შეიცვლება და გაქრება popup
                    <div className='cover' onClick={changePopup}>
                        <div className='popup-body'>
                            <p>MyPopUp</p>
                            <button className='close-btn'>Close</button>
                        </div>
                    </div>
            ): ""}       
        </div>
    )
}

export default Popup

