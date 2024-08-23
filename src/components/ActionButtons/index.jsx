import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './actionButtons.scss';
import Alert from '../Alert';

const ActionButtons = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleMouseEnter = () => {
        setShowAlert(true);
    };

    const handleMouseLeave = () => {
        setShowAlert(false);
    };

    return (
        <nav className='action-buttons'>
            <ul className='action-buttons__list'>
                <NavLink to='/' className='action-buttons__list-item'>
                    All Files
                </NavLink>
                <NavLink
                    className='action-buttons__list-item'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Photos
                    {showAlert && <Alert />}
                </NavLink>
                <NavLink to='/signatures' className='action-buttons__list-item'>
                    Signatures
                </NavLink>
            </ul>
        </nav>
    );
};

export default ActionButtons;
