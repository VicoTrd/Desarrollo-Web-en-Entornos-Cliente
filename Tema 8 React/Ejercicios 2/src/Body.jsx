import { useState } from "react"

function Body(){

    // 1. Contador Simple
    const [count, setCount] = useState(0)

    // 2. Alternador de Visibilidad
    const [isVisible, setIsVisible] = useState(true)

    // 3. Sincronizador de Input
    const [texto, setTexto] = useState("")

    // 4. Cambiador de Color
    const [color, setColor] = useState("grey")

    // 6. Formulario Básico
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [userData, setUserData] = useState(null)

    function enviar(e){
        e.preventDefault()
        setUserData({nombre, email})
    }

    return (
        <div style={{padding: "20px"}}>

            {/* 1. CONTADOR SIMPLE */}
            <h2>1. Contador Simple</h2>
            <p>Número: {count}</p>
            <button onClick={()=>setCount(count+1)}>Incrementar</button>
            <button onClick={()=>setCount(count-1)}>Decrementar</button>
            <button onClick={()=>setCount(0)}>Resetear</button>

            <hr/>


            {/* 2. TOGGLE */}
            <h2>2. Alternador de Visibilidad</h2>
            <button onClick={()=>setIsVisible(!isVisible)}>Mostrar/Ocultar</button>
            {isVisible ? <p>Lorem ipsum dolor sit amet.</p> : null}

            <hr/>


            {/* 3. INPUT SINCRONIZADO */}
            <h2>3. Sincronizador de Input</h2>
            <input type="text" value={texto} onChange={(e)=>setTexto(e.target.value)} />
            <p>{texto}</p>

            <hr/>


            {/* 4. CAJA CON COLOR */}
            <h2>4. Cambiador de Color</h2>
            <input value={color} onChange={(e)=>setColor(e.target.value)} />
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: color,
                border: "1px solid black",
                marginTop: "10px"
            }}>
            </div>

            <hr/>


            {/* 6. FORMULARIO BÁSICO */}
            <h2>6. Formulario Básico</h2>

            <form onSubmit={enviar}>
                <input 
                    type="text" 
                    placeholder="Nombre"
                    value={nombre}
                    onChange={e=>setNombre(e.target.value)}
                />
                <br/>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <br/>
                <button type="submit">Enviar</button>
            </form>

            {userData && (
                <p>
                    Usuario registrado: Nombre: {userData.nombre}, Email: {userData.email}
                </p>
            )}

        </div>
    )
}


export default Body;
