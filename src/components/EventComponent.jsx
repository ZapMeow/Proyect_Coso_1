function EventComponent() {
    return(
        <div className="event">
        <div className="eventDescription">
            <h1>Evento gamer</h1>
            <p>Evento comunitario en San Antonio por la salida de silksong</p>
        </div>
        <div className="eventLocation">
            <p>hola hola</p>
            
            <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1ses!2scl!4v1757474516485!5m2!1ses!2scl!6m8!1m7!1smchyYqMYbseAPbJ3bQnP0g!2m2!1d-33.56669449337895!2d-71.60751753229376!3f307.84117539758273!4f-12.671811096800354!5f0.7820865974627469"
                title="Hola"
                width="600"
                height="400"
                style={{ border: "2px solid black", borderRadius: "10px" }}
            ></iframe>
        </div>
    </div>
    );
}

export default EventComponent;