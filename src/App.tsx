import { BrowserRouter as Router } from "react-router-dom";
import Panel from "./components/panel/Panel";

const App = () => {
    return (
        <Router>
            <Panel />
        </Router>
    );
};

export default App;
