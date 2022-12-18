function BaseBtn({children, onClick}) {
    return (
        <button className="btn" onClick={onClick}>{children}</button>
    )
};

export default BaseBtn