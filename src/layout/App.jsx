import { Route, Router, Routes } from "solid-app-router";
import { toast } from "react-toastify"
import Header from "./Header.jsx"
import Contador from "../paginas/Contador.jsx";
import Todo from "../paginas/Todo.jsx";

toast.configure({
    autoClose: 1000
})

const App = () => {

    

    return (
        <Router>
            <Header/>
            <main className="layout-main" >
                <Routes>
                    <Route path="/contador" element={<Contador/>}/>
                    <Route path="/todo" element={<Todo/>}/>
                </Routes>
            </main>
            
        </Router>
    )
}

export default App