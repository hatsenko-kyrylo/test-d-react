import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { fetchFiles } from '../../utils/fetchApi';

import './listFolder.scss';
import ListItem from '../ListItem';
import UploadButton from '../UploadButton';
import ErrorMessage from '../ErrorMessage';
import folderCloseIcon from '/assets/folder.svg?url';
import folderOpenIcon from '/assets/folder-open.svg?url';

const ListFolder = ({ file }) => {
    const [files, setFiles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const icon = isOpen ? folderOpenIcon : folderCloseIcon;

    const handleClick = useCallback(async () => {
        if (loading) return;

        if (!isOpen && files.length === 0) {
            setLoading(true);
            try {
                const data = await fetchFiles(file.path_lower);
                setFiles(data);
            } catch (err) {
                setError('Failed to load files');
                console.error(err);
            } finally {
                setLoading(false);
                setIsOpen(true);
            }
        } else {
            setIsOpen(!isOpen);
        }
    }, [file.path_lower, files.length, isOpen, loading]);

    return (
        <li className='list-item list-folder'>
            <div className='list-folder__header' onClick={handleClick}>
                <img src={icon} alt='Folder icon' />
                <p>{file.name}</p>
            </div>
            {isOpen && (
                <ul className='list-folder__list'>
                    {error ? (
                        <ErrorMessage message={error} />
                    ) : files.length === 0 && !loading ? (
                        <p className='list-folder__list-empty'>{`Folder is empty :(`}</p>
                    ) : (
                        files.map((file) => <ListItem key={file.id} file={file} />)
                    )}
                    {!loading && <UploadButton file={file} setFiles={setFiles} />}
                </ul>
            )}
        </li>
    );
};

ListFolder.propTypes = {
    file: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        path_lower: PropTypes.string.isRequired,
    }).isRequired,
};

export default ListFolder;
