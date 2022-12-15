import BaseNavBtn from "./BaseNavBtn.jsx"


function Editor() {

    return (
        <div className="editor">
            <div className="preview">
                <canvas id="editorCanvas"></canvas>
            </div>
            <BaseNavBtn dir="left"></BaseNavBtn>
            <BaseNavBtn dir="right"></BaseNavBtn>
            <BaseNavBtn dir="up"></BaseNavBtn>
            <BaseNavBtn dir="down"></BaseNavBtn>
        </div>

    )
}

export default Editor