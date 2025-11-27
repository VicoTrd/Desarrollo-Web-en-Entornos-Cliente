import { useState } from "react"

function Body() {

  const PRODUCT_DATA = {
    id: "p1",
    name: "Zapatillas Clásicas Runner",
    price: 120,
    variants: [
      { id: "v1", color: "Blanco", colorHex: "#FFFFFF", image: "https://via.placeholder.com/400x400/f0f0f0/000000?text=Blanco", stock: 10 },
      { id: "v2", color: "Negro", colorHex: "#000000", image: "https://via.placeholder.com/400x400/333333/ffffff?text=Negro", stock: 5 },
      { id: "v3", color: "Rojo", colorHex: "#FF0000", image: "https://via.placeholder.com/400x400/aa0000/ffffff?text=Rojo", stock: 0 }
    ]
  }

  const [sel,setSel]=useState(PRODUCT_DATA.variants[0])

  return <div>

    <img src={sel.image} alt={sel.color}/>
    <h2>{PRODUCT_DATA.name}</h2>
    <p>${PRODUCT_DATA.price}</p>

    {PRODUCT_DATA.variants.map(v=>(
      <button key={v.id} onClick={()=>setSel(v)} style={{background:v.colorHex,width:"20px",height:"20px"}}></button>
    ))}

    {sel.stock>0 ? <p>Stock: {sel.stock}</p> : <p>Sin stock</p>}

    <button disabled={sel.stock==0}>Comprar</button>

  </div>
}


export default Body;
