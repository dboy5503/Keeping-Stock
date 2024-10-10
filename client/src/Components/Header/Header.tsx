import './Header.css'


export default function Header() {
    return (

        <header>
            <h1 className="projectFont">Keeping Stock</h1>
            <nav className="navigation">
                <ul >
                    <li>
                        <a href="#home">Home</a>
                        <li>
                            <a href="#login">Sign In</a>
                        </li>
                        <li>
                            <a href="#news">News</a>
                        </li>
                        <li id="options">
                            <a href="#watchlist">My Watchlists</a>
                            <ul className="subnav">
                                <li><a href="#list-one">List 1</a></li>
                                <li><a href="#list-two">List 2</a></li>
                                <li><a href="#list-three">List 3</a></li>
                                <li><a href="#list-four">View All</a></li>
                            </ul>
                        </li>
                        <li id="search">
                            <form action="" method="get">
                                <input type="text" name="search_text" id="search_text" placeholder="Search for a stock" />
                                <button type="button" name="search_button" id="search_button">Go</button>
                            </form>
                        </li>
                    </li>
                </ul>
            </nav>

        </header>

    )


}