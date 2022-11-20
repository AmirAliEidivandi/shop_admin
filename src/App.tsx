import { BrowserRouter as Router } from "react-router-dom";
import Panel from "./components/panel/Panel";

export default function App() {
    return (
        <Router>
            <Panel />
        </Router>
    );
}
