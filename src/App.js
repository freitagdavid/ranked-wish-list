import ItemList from "./components/ItemList";
import Container from "@mui/material/Container";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Container>
                    <ItemList></ItemList>
                </Container>
            </header>
        </div>
    );
}

export default App;
