/*const { useState, createContext, useContext } = React;

const MyContext = createContext();


const MyProvider = ({ children }) => {
    const [proyecto, setProyecto] = useState({ resena: '', ponencia: '', fecha: '' });

    return (
        <MyContext.Provider value={{ proyecto, setProyecto }}>
            {children}
        </MyContext.Provider>
    );
};


const App = () => {
    return (
        <MyProvider>
            <Profile />
        </MyProvider>
    );
}

const Profile = () => {
    const { proyecto, setProyecto } = useContext(MyContext);
    const [newresena, setNewResena] = useState('');
    const [newponencia, setNewPonencia] = useState('');
    const [newfecha, setNewFecha] = useState('');

    const handleResenaChange = (event) => {
        setNewResena(event.target.value);
    }

    const handlePonenciaChange = (event) => {
        setNewPonencia(event.target.value);
    }

    const handleFechaChange = (event) => {
        setNewFecha(event.target.value);
    }

    const handleResenaUpdate = () => {
        setProyecto({ ...proyecto, name: newresena });

    const handlePonenciaUpdate = () => {
        setProyecto({ ...proyecto, name: newponencia });
    }

    const handleFechaUpdate = () => {
        setProyecto({ ...proyecto, name: newfecha });

    return (
        <div>
            <h2>Profile</h2>
            <p>Presentación de la Problemática : {proyecto.resena}</p>
            <p>Ponencia (descripción detallada - solución al problema) : {proyecto.ponencia}</p>
            <p>Fecha actual : {proyecto.fecha}</p>
            <div>
                <b>Presentación de la Problemática :</b>
                <div>
                    <input id="modify-user-name" type="text" value={newresena} onChange={handleResenaChange} />
                    <input id="modify-user-name" type="text" value={newponencia} onChange={handlePonenciaChange} />
                    <input id="modify-user-name" type="text" value={newfecha} onChange={handleFechaChange} />
                    <button id="update-user" className="mt-2 btn btn-success d-flex justify-content-center align-items-center" style={{ height: '6vh' }} onClick={handleNameUpdate}>cambiar</button>
                </div>
            </div>
        </div>
    );
};*/