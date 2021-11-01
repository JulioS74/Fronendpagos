import React from 'react'
import imgeducacion from '../../assets/img-educacion.svg'

export default function EstadoDeCuenta({ texto }) {
    return (
        <div className="img-partidos-vacio">
            <div>
                <object type="image/svg+xml" data={imgeducacion}>
                    Error al cargar svg
                </object>
                <p>{texto}</p>
            </div>
        </div>
    )
}


