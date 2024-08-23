import PropTypes from 'prop-types';

import ListFolder from '../ListFolder';
import ListFile from '../ListFile';

const ListItem = ({ file }) => {
    if (file['.tag'] === 'folder') {
        return <ListFolder file={file} />;
    } else if (file['.tag'] === 'file') {
        return <ListFile file={file} />;
    }
};

ListItem.propTypes = {
    file: PropTypes.object,
};

export default ListItem;
