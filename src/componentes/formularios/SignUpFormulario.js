import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"


export default function SignUpFormulario({ errores, enviarCallback }) {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [userName, setUserName] = useState("");
    const [curso, setCurso] = useState("");
    const [password, setPassword] = useState("");


    const enviarFormulario = (e) => {
        e.preventDefault();
        enviarCallback({ userName, password, nombre, correo, curso });
    }

    return (

        <Form onSubmit={enviarFormulario}>

            <Form.Group className="margen-t margen-b" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    isInvalid={errores.nombre} />

                <Form.Control.Feedback type="invalid">
                    {errores.nombre}
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="margen-b" controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese su correo"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    isInvalid={errores.correo} />

                <Form.Control.Feedback type="invalid">
                    {errores.correo}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="margen-b" controlId="userName">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese su usuario"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                    isInvalid={errores.userName} />

                <Form.Control.Feedback type="invalid">
                    {errores.userName}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="margen-b" controlId="curso">
                <Form.Label>Curso</Form.Label>
                <Form.Control
                    type="curso"
                    placeholder="Ingrese su curso"
                    value={curso}
                    onChange={e => setCurso(e.target.value)}
                    isInvalid={errores.curso} />

                <Form.Control.Feedback type="invalid">
                    {errores.curso}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="margen-b" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    isInvalid={errores.password} />

                <Form.Control.Feedback type="invalid">
                    {errores.password}
                </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="margen-t">
                Crear usuario
            </Button>
        </Form>
    )
}




