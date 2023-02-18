import { Piano } from "./modules/piano";
import { Notification, useNewVersion } from "./modules/versionNotification";

function App() {
    useNewVersion();

    return (
        <div className="app">
            <Notification />
            <Piano />
        </div>
    );
}

export default App;
