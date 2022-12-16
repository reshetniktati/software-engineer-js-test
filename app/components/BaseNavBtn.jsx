function BaseNavBtn({dir, onMoveHandler}) {

    function moveHandler(e) {
        onMoveHandler(e.target.value)
    }

    return (
        <button className={`btn_nav-${dir}`} value={dir} onClick={(e) => {moveHandler(e)}}>
            +
        </button>
    )
}

export default BaseNavBtn