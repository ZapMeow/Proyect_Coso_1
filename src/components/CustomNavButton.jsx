function CustomNavButton(props, className) {
    return (
        <nav className={className}>
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
