import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { obetenerUsuarioPartidos } from '../acciones/partidoAcciones';
import Partido from '../componentes/partidos/Partido';
import EstadoDeCuenta from '../componentes/utils/EstadoDeCuenta';
import Placeholder from '../componentes/utils/Placeholder';

export default function PartidosUsuario() {

    const [fetching, setFetching] = useState(false);
    const fetched = useSelector(state => state.partidos.fetched);
    const partidos = useSelector(state => state.partidos.partidos);
    const dispatch = useDispatch();

    useEffect(() => {

        async function fetchedPartidos() {
            if (!fetched) {
                try {
                    setFetching(true);
                    await dispatch(obetenerUsuarioPartidos());
                    setFetching(false);
                } catch (error) {
                    toast.error(
                        error.response.data.message,
                        { position: toast.POSITION.BOTTOM_CENTER, autoClose: 2000 }
                    );
                }
            }
        }

        fetchedPartidos();

    }, [dispatch, fetched]);

    return (
        <div>
            <div className="mt-3">
                <h1 className="mi-jumbotron">Mis partidos</h1>
            </div>
            {fetching && <Placeholder></Placeholder>}
            {!fetching && partidos.length === 0 &&
                <EstadoDeCuenta texto="No hay estados de cuenta disponibles"></EstadoDeCuenta>
            }
            <div>
                {partidos.map(partido => <Partido key={partido.partidoId} partido={partido} controlesRender={true}></Partido>)}
            </div>
        </div>
    )
}

