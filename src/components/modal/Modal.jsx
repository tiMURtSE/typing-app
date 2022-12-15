import { useNavigate } from 'react-router-dom';
import Button from '../UI/button/Button';
import classes from './Modal.module.css';

const Modal = ({modal, setModal, timer, text, mistakes}) => {
    const route = useNavigate();
    const clickFunction = () => {
        if (modal.isStart) {
            setModal({...modal, isDisplayed: false});
        } else {
            route("/");
        }
    };

    if (!modal.isDisplayed) return;

    const accuracy = +((text.length - mistakes.quantity) / text.length).toFixed(1);
    const time = +((timer.current.endTime - timer.current.startTime) / 1000 / 60).toFixed(3);
    const symbolsPerMinute = Math.round(text.length / time);

    return (
        <div className={classes.modal}>
            <div className={classes.alert}>
                    {(modal.isStart) ? (
                        <span>Готовы?</span>
                    ) : (
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <span>Символов в минуту: {symbolsPerMinute}</span>
                            <span>Процент точности: {accuracy}</span>

                        </div>
                    )}
                <Button onClick={clickFunction}>OK!</Button>
            </div>
        </div>
    );
};

export default Modal;