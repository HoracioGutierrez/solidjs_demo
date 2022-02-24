import { toast } from "react-toastify"
import { createEffect, createMemo, createSignal } from "solid-js"

toast.configure({
    autoClose : 1000
})

const App = () => {

    const [counter,setCounter] = createSignal(0)
    const limit = createMemo(()=>10)

    const increment = () => setCounter(counter() + 1)

    const decrement = () => setCounter(counter() - 1)

    createEffect(()=>{
        if(counter() == 5) {
            toast.dismiss()
            toast.info("Reaching the limit...")
        }

        if(counter() > 5 && counter() < limit()) {
            toast.dismiss()
            toast.warn(`Remaining: ${limit() - counter()}`)
        }

        if(counter() == limit()) {
            toast.dismiss()
            toast.error("You have reached the limit!")
        }
    })

    return (
        <div>
            <p>Contador : {counter()}</p>
            <button onClick={increment}>sumar</button>
            <button onClick={decrement}>restar</button>
            
        </div>
    )
}

export default App