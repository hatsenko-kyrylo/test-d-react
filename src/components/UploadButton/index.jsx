import { fetchFiles, uploadFile } from '../../utils/fetchApi';
import PropTypes from 'prop-types';

import buttonAddFileIcon from '/assets/plus.svg?url';
import './uploadButton.scss';

const UploadButton = ({ file, setFiles }) => {
    const path = file ? file.path_lower : '';

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            try {
                await uploadFile(selectedFile, path);
                alert('File uploaded successfully');

                const data = await fetchFiles(path);
                setFiles(data);
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Failed to upload file');
            }
        }
    };

    return (
        <div className='upload-button'>
            <label className='upload-button-upload' htmlFor={`file-upload-${path}`}>
                <img src={buttonAddFileIcon} alt='button icon' />
                <p>Upload file</p>
            </label>
            <input type='file' id={`file-upload-${path}`} onChange={handleFileChange} />
        </div>
    );
};

UploadButton.propTypes = {
    file: PropTypes.shape({
        path_lower: PropTypes.string,
    }),
    setFiles: PropTypes.func.isRequired,
};

export default UploadButton;
