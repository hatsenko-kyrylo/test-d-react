import PropTypes from 'prop-types';

import './errorMessage.scss';

const ErrorMessage = ({ message }) => {
    return <div className='error-message'>{message}</div>;
};

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
};

export default ErrorMessage;
