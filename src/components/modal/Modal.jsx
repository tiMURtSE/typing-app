import Statstics from '../statistics/Statistics';
import Button from '../UI/button/Button';
import classes from './Modal.module.css';

const Modal = ({visible, setVisible, modalOption, text, timer, mistakes}) => {
    let rootClass = classes.modal;
    let comp = null;

    if (visible) {
        rootClass = [rootClass, classes.active].join(' ');
    }

    if (modalOption === 'prepare') {
        comp = <div><div>Ready?</div><Button onClick={() => setVisible(false)}>ОК!</Button></div>;
    } else if (modalOption === 'result') {
        comp = <Statstics text={text} timer={timer} mistakes={mistakes}/>
    } else if (modalOption === 'edit') {
        comp = <div>Edit</div>
    }

    return (
        <div className={rootClass} onClick={() => setVisible(false)}>
            <div className={classes.alert} onClick={(event) => event.stopPropagation()}>
                {comp}
            </div>
        </div>










        // <div className={classes.modal}>
        //     <div className={classes.alert}>
        //             {(modal.isStart) ? (
        //                 <div>
        //                     <div>Готовы?</div>
        //                     <Button onClick={() => setModal({...modal, isDisplayed: false})}>OK!</Button>
        //                 </div>
        //             ) : (
        //                 <Statstics text={text} mistakes={mistakes} timer={timer}/>
        //             )}
        //     </div>
        // </div>
    );
};

export default Modal;