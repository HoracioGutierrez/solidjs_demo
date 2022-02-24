import { createSignal } from "solid-js"

const App = () => {

    const [counter,setCounter] = createSignal(0)

    const increment = () => setCounter(counter() + 1)

    const decrement = () => setCounter(counter() - 1)

    return (
        <div>
            <p>Contador : {counter()}</p>
            <button onClick={increment}>sumar</button>
            <button onClick={decrement}>restar</button>
        </div>
    )
}

export default App