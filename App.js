import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";

const App = () => {
    return (
        <div className="App">
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)