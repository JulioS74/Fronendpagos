import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Partido from '../componentes/partidos/Partido';
import EstadoDeCuenta from '../componentes/utils/EstadoDeCuenta';
import Placeholder from '../componentes/utils/Placeholder';
import { PARTIDOS_CREADOS_ENDPOINT } from '../helpers/endpoints';

export default function Partidos() {

    const [partidos, setPartidos] = useState([]);
    const [fetching, setFeching] = useState(true);

    useEffect(() => {
        axios.get(PARTIDOS_CREADOS_ENDPOINT).then(response => {
            setPartidos(response.data);
            setFeching(false);
        }).catch(e => {
            console.error(e);
            setFeching(false);
        })
    }, []);

    return (
        <div>
            <div className="mt-3">
                <h3 className="mi-jumbotron">Estado de Cuenta</h3>
            </div>
            {fetching && <Placeholder></Placeholder>}
            {!fetching && partidos.length === 0 &&
                <EstadoDeCuenta texto="No hay Estados de cuenta disponibles"></EstadoDeCuenta>
            }
            <div>
                {partidos.map(partido => <Partido key={partido.partidoId} partido={partido} controlesRender={false}></Partido>)}
            </div>
        </div>
    )
}

