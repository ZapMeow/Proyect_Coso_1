import '../css/main.css'

function FilterComponents() {
    return (
        <div className="navBar">
            <h1>Filtros catalogo</h1>
            <div className="filter">
                <label htmlFor="filtrerPrice">Precio maximo de filtro</label>
                <input type="number" name="filtrerPrice" id="filtrerPrice" placeholder="CLP format ex $999999"/>
            </div>
            <div className="filter">
                <label htmlFor="selectType">Categoria a filtrar</label>
                <select name="" id="">
                    <option value="all">Todos</option>
                    <option value="tablegame">Juegos de mesa</option>
                    <option value="accessory">Accesorios</option>
                    <option value="console">Consolas</option>
                    <option value="pc">Computadores</option>
                    <option value="chair">Sillas</option>
                    <option value="mouse">Mouse</option>
                    <option value="mousepad">Mousepad</option>
                    <option value="clothes">Poleras</option>
                    <option value="plush">Plush</option>
                </select>
            </div>
            <button>Filtrar</button>
        </div>
    );
}
export default FilterComponents;