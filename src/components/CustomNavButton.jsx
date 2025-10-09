function CustomNavButton(props) {
    return (
        <nav>
            {props.links.map((atributes) => {
                return (
                    <button type={atributes.type}>
                        {atributes.name}
                    </button>
                );
            })}
        </nav>
    );
}
export default CustomNavButton;
