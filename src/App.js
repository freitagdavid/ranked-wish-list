import ItemList from "./components/ItemList";
import Container from "@mui/material/Container";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xl">
                <ItemList></ItemList>
            </Container>
        </div>
    );
}

export default App;
