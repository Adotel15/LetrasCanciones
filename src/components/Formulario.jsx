
import { useState } from "react"

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    return (
        <form>
            <legend>Busca por Artistas y Canción</legend>

            <div className = "form-grid">
                <div>
                    <label>Artista</label>
                    <input
                        type = "text"
                        name = "artista"
                        placeholder = "Nombre Artista" 
                        value = {busqueda.artista}
                        onChange = { evento => setBusqueda({
                            ...busqueda,
                            [evento.target.name] : evento.target.value
                        })}
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input
                        type = "text"
                        name = "cancion"
                        placeholder = "Nombre Canción" 
                        value = {busqueda.cancion}
                        onChange = { evento => setBusqueda({
                            ...busqueda,
                            [evento.target.name] : evento.target.value
                        })}
                    />
                </div>

                <input type = "submit" value = "Buscar" />
            </div>
        </form>
    )
}

export default Formulario
