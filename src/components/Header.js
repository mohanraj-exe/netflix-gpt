import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <header className="absolute header-container px-8 py-2 bg-linear-to-b from-black z-10">
            <img className="w-40" src={NETFLIX_LOGO} alt="logo"/>
        </header>
    )
};

export default Header;