import { useState } from "react";

function Filter(props: any) {
    const [selected, setSelected] = useState('');
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button onClick={toggleOptions} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                {selected ? selected : props.optionType}
            </button>
            {showOptions && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'white',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000,
                    marginTop: '5px',
                    padding: '10px',
                }}>
                    <span onClick={() => { setSelected(props.option1); setShowOptions(false); }} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>{props.option1}</span>
                    <span onClick={() => { setSelected(props.option2); setShowOptions(false); }} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>{props.option2}</span>
                    <span onClick={() => { setSelected(props.option3); setShowOptions(false); }} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>{props.option3}</span>
                    <span onClick={() => { setSelected(props.option4); setShowOptions(false); }} style={{ display: 'block', padding: '10px', cursor: 'pointer' }}>{props.option4}</span>
                </div>
            )}
        </div>
    );
}

export default Filter;
