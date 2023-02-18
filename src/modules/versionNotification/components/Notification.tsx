import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {
    return (
        <ToastContainer
            position={"top-center"}
            autoClose={false}
            theme={"dark"}
        />
    );
};

export default Notification;