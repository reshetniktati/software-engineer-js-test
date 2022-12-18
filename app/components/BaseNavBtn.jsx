function BaseNavBtn({dir, onImgMove}) {

    function changeDirectionHandler(e) {
        onImgMove(e.target.value)
    }

    return (
        <button className={`btn_nav-${dir}`} value={dir} onClick={(e) => {changeDirectionHandler(e)}}>
            +
        </button>
    )
}

export default BaseNavBtn