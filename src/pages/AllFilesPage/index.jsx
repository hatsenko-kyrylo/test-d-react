import { useEffect, useState } from 'react';
import { fetchFiles } from '../../utils/fetchApi';

import './allFilesPage.scss';
import ListItem from '../../components/ListItem';
import UploadButton from '../../components/UploadButton';
import ErrorMessage from '../../components/ErrorMessage';

const AllFilesPage = () => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFiles('')
            .then((data) => {
                setFiles(data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Something went wrong :(');
                setLoading(false);
                console.error(err);
            });
    }, []);

    return (
        <ul className='all-files-page'>
            {error ? (
                <ErrorMessage message={error} />
            ) : files.length > 0 ? (
                files.map((file) => <ListItem key={file.id} file={file} />)
            ) : (
                !loading && <h3>Folder is empty</h3>
            )}
            {!loading && !error && <UploadButton setFiles={setFiles} />}
        </ul>
    );
};

export default AllFilesPage;
