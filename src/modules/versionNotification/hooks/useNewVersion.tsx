import { useEffect } from "react";
import { toast } from "react-toastify";
import { useServiceWorker } from "../../base/hooks/useServiceWorker";
import NewVersion from "../components/NewVersion";

const useNewVersion = () => {
    const { waitingWorker, showReload, reloadPage } = useServiceWorker();

    // decides when to show the toast
    useEffect(() => {
        if (showReload && waitingWorker) {
            toast(<NewVersion onClick={() => reloadPage()}/>);
        }
    }, [waitingWorker, showReload, reloadPage]);
};

export default useNewVersion;