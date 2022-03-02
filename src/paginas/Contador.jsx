import { createEffect, createMemo, createSignal } from "solid-js"

const Contador = () => {

    const [counter, setCounter] = createSignal(0)
    const limit = createMemo(() => 10)

    const increment = () => setCounter(counter() + 1)

    const decrement = () => setCounter(counter() - 1)

    createEffect(() => {
        if (counter() == 5) {
            toast.dismiss()
            toast.info("Reaching the limit...")
        }

        if (counter() > 5 && counter() < limit()) {
            toast.dismiss()
            toast.warn(`Remaining: ${limit() - counter()}`)
        }

        if (counter() == limit()) {
            toast.dismiss()
            toast.error("You have reached the limit!")
        }
    })

    return (
        <div className="counter">
            <header className="counter__header">
                <p className="counter__headerText" >Contador Actual</p>
                <p className="counter__headerValue">{counter()}</p>
            </header>
            <div className="counter__actions">
                <button className="counter__actionsButton--sumar" onClick={increment}>sumar</button>
                <button className="counter__actionsButton--restar" onClick={decrement}>restar</button>
            </div>
        </div>
    );
}

export default Contador;