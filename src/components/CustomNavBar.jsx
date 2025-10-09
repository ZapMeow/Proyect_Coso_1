function CustomNavBar(props) {
    return(
        <nav>
            {props.links.map((link) => (
                <a href={link.url}>{link.name}</a>
            ))}
        </nav>
    );
}
export default CustomNavBar;