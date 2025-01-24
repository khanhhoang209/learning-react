import './App.scss';
import Header from "./components/Header";
import TableCategories from "./components/categories/TableCategories";

function App() {
    return (
        <div className='app-container'>
            <Header/>
            <TableCategories/>
        </div>
    );
}

export default App;