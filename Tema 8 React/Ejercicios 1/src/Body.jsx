import {useState,useEffect} from "react"

function Body(){

  // cosas del contador
  const [x,setX]=useState(0)

  // nombre y apellido
  const [a,setA]=useState("")
  const [b,setB]=useState("")

  // usuarios API
  const [u,setU]=useState([])

  // animales
  let an=["dog","cat","chicken","cow","sheep","horse"]

  // chistes
  let jks=[
  { id:1, setup:"What's the best thing about a Boolean?", punchline:"Even if you're wrong, you're only off by a bit"},
  { id:2, setup:"Why do programmers wear glasses?", punchline:"Because they need to C#"}
  ]

  // boton raro
  function B(props){
  return <button onClick={props.onClick}>{props.children}</button>
  }

  // fetch a la API (lo dejo aquí en medio)
  function f(){
  fetch("https://random-data-api.com/api/users/random_user?size=10")
  .then(r=>r.json())
  .then(d=>setU(d))
  }

  // para que cargue al inicio
  useEffect(()=>{f()},[])

  return(
  <div style={{padding:"10px"}}>

  <h3>1</h3>
  <div style={{width:"200px",height:"200px",background:"lightblue",display:"flex",justifyContent:"center",alignItems:"center"}}>Hello, World!</div>

  <h3>2</h3>
  <button onClick={()=>alert("Clicked!")}>click</button>

  <h3>3</h3>
  <B onClick={()=>alert("uno")}>uno</B>
  <B onClick={()=>alert("dos")}>dos</B>
  <B onClick={()=>alert("tres")}>tres</B>

  <h3>4</h3>
  <p>{x}</p>
  <button onClick={()=>setX(x+1)}>+</button>

  <h3>5</h3>
  <ul>
  {an.map((q,i)=><li key={i}>{q}</li>)}
  </ul>

  <h3>6</h3>
  {an.map((k,i)=><p key={i}>{k}</p>)}

  <h3>7</h3>
  <input placeholder="nombre" onChange={e=>setA(e.target.value)}/>
  <input placeholder="apellido" onChange={e=>setB(e.target.value)}/>
  <button onClick={()=>alert("Hello "+a+" "+b+"!")}>saludar</button>

  <h3>8</h3>
  {jks.map(z=>
  <div key={z.id} style={{border:"1px solid #000",margin:"5px",padding:"5px"}}>
  <h4>{z.setup}</h4>
  <p>{z.punchline}</p>
  </div>
  )}

  <h3>9</h3>
  <button onClick={f}>otra vez</button>
  {u.map(person =>
  <div key={person.id} style={{border:"1px solid gray",padding:"10px",margin:"10px"}}>
  <h3>{person.first_name} {person.last_name}</h3>
  <p>{person.email}</p>
  <p>{person.username}</p>
  </div>
  )}

  </div>
  )
}

//Styles hechos con chat

export default Body
