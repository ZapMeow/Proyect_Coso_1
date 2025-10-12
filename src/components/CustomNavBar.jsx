import '../css/CustomNavBar.css';

function CustomNavBar({ arrayLinks, flex_direction, className }) {
    return(
        <nav className={className} style={{ display: 'flex', 
                                                flexDirection: flex_direction, 
                                                }}>
            {arrayLinks.map((link) => (
                <a href={link.url}>{link.name}</a>
            ))}
        </nav>
    );
}
export default CustomNavBar;