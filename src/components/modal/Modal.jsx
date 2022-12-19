import { useNavigate } from 'react-router-dom';
import Statstics from '../statistics/Statistics';
import Button from '../UI/button/Button';
import classes from './Modal.module.css';

const Modal = ({modal, setModal, timer, text, mistakes, option}) => {
    if (!modal.isDisplayed) return;

    return (
        <div className={classes.modal}>
            <div className={classes.alert}>
                    {(modal.isStart) ? (
                        <div>
                            <div>Готовы?</div>
                            <Button onClick={() => setModal({...modal, isDisplayed: false})}>OK!</Button>
                        </div>
                    ) : (
                        <Statstics text={text} mistakes={mistakes} timer={timer}/>
                    )}
            </div>
        </div>
    );
};

export default Modal;