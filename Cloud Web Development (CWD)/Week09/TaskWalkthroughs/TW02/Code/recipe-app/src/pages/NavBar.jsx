import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav>
            <button 
                style={{ fontWeight: isActive("/") ? "bold" : "normal" }} 
                onClick={() => navigate("/")}>
                Home
            </button>
            <button 
                style={{ fontWeight: isActive("/recipes") ? "bold" : "normal" }} 
                onClick={() => navigate("/recipes")}>
                Recipes
            </button>
            <button 
                style={{ fontWeight: isActive("/favourites") ? "bold" : "normal" }} 
                onClick={() => navigate("/favourites")}>
                Favorites
            </button>
            <button 
                style={{ fontWeight: isActive("/about") ? "bold" : "normal" }} 
                onClick={() => navigate("/about")}>
                About
            </button>
        </nav>
    );
}

export default Navbar;