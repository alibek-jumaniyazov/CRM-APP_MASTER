import React, { useState } from 'react';
import ModalMake from './ModalMake.jsx';
import SecMake from './SecMake.jsx';

const ParentComponent = () => {
    const [currentModal, setCurrentModal] = useState('modalMake'); // Состояние для отслеживания текущего модального окна

    const handleClose = () => {
        setCurrentModal(null); // Закрыть модальное окно
    };

    const handleYes = () => {
        setCurrentModal('secMake'); // Показать SecMake
    };

    return (
        <div>
            {currentModal === 'modalMake' && (
                <ModalMake onClose={handleClose} onYes={handleYes} />
            )}
            {currentModal === 'secMake' && <SecMake onClose={handleClose} />} 
            <button onClick={() => setCurrentModal('modalMake')}>Показать ModalMake</button>
        </div>
    );
};

export default ParentComponent;
