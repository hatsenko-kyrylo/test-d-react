import PropTypes from 'prop-types';

import './listFile.scss';
import fileIcon from '/assets/file.svg?url';

const ListFile = ({ file }) => {
    return (
        <li className='list-item list-file'>
            <img src={fileIcon} alt='File icon' />
            <a
                className='list-file__link'
                href={`https://www.dropbox.com/home${file.path_lower}`}
                target='_blank'
            >
                {file.name}
            </a>
        </li>
    );
};

ListFile.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string.isRequired,
        path_lower: PropTypes.string.isRequired,
    }).isRequired,
};

export default ListFile;
