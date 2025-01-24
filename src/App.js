import './App.scss';
import Header from "./components/Header";
import TableCategories from "./components/categories/TableCategories";
import {Container} from "react-bootstrap";

function App() {
    return (
        <div className='app-container'>
            <Header/>
            <Container>
               <TableCategories/>
            </Container>
        </div>
    );
}

export default App;