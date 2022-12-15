
import { validation } from "../utils/helpers/vlidationRules.js";


function UploadFilePanel({onFileUpload}) {

    const uploadHandler = function(e) {
        let file = e.target.files[0];
        if(!validation.imgType(file.type)) return;
        onFileUpload(file);
    }

    return (
        <form action="#">
            <fieldset>
            <legend>Select an Image file:</legend>
                <input type="file" onChange={(e) => {uploadHandler(e)}}/>
            </fieldset>
        </form>
    )
}

export default UploadFilePanel