import Hero from "../hero/hero";
import { supers } from "../../json";

function App() {
    const data = JSON.parse(supers);
    const hero = data.map(item => {
        return <div><Hero {...item} /></div>
    })

    return (
        <div className="app">
            {hero}
        </div>
    )
}
export default App;