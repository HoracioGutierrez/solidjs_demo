import { Link } from "solid-app-router";

const Header = () => {
    return (
        <header className="layout-header">
            <h1 className="layout-header__title">Solid Demo</h1>
            <nav className="layout-header__nav">
                <Link href="/contador">contador</Link>
                <Link href="/todo">todo</Link>
            </nav>
        </header>
    );
}

export default Header;