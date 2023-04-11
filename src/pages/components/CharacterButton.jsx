import React, {useState} from 'react';

function CharacterButton (props) {return (<div><Helper url = props.url/></div>)}

const Helper  = (props) => {
    const [clicked, setClick] = useState(false);

    const handleClick = () => {
        setClick(!clicked);
    };

    return (
        <button
            style={{
                width: '256px',
                height: '256px',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                boxShadow: clicked ? '0px 0px 10px 5px rgba(255,0,0,1)' : 'none'
            }}
            onClick={handleClick}
        >
            <img
                src={props.url}
                alt="Button image"
                style={{ display: 'block', margin: 'auto', maxWidth: '100%', maxHeight: '100%' }}
            />
        </button>
    );
}

export default CharacterButton();