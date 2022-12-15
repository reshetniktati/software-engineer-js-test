function BaseNavBtn(props) {

    function moveHandler(e) {
        console.log('move', e.target.value);
    }

    let position
    switch (props.dir) {
        case 'left':
            position = '+';
            break
        case 'right':
            position = '+';
            break
        case 'up':
            position = '+';
            break
        case 'down':
            position = '+';
            break

    } 

    return (
        <button className={`btn_nav-${props.dir}`} 
            value={props.dir} 
            onClick={(e) => {moveHandler(e)}}>{position}
        </button>
    )
}

export default BaseNavBtn