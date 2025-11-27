import './App.css'
import Body from './Body.jsx'

const PRODUCT_DATA = {
  id: "p1",
  name: "Zapatillas Clásicas Runner",
  price: 120,
  variants: [
    {
      id: "v1",
      color: "Blanco",
      colorHex: "#FFFFFF",
      image: "https://via.placeholder.com/400x400/f0f0f0/000000?text=Blanco",
      stock: 10
    },
    {
      id: "v2",
      color: "Negro",
      colorHex: "#000000",
      image: "https://via.placeholder.com/400x400/333333/ffffff?text=Negro",
      stock: 5
    },
    {
      id: "v3",
      color: "Rojo",
      colorHex: "#FF0000",
      image: "https://via.placeholder.com/400x400/aa0000/ffffff?text=Rojo",
      stock: 0
    }
  ]
};


function App() {

  return (
    <>
      <Body />
    </>
  )
}

export default App