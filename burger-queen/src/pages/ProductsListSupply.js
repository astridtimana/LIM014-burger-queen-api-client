// import logo from '../images/burger-queen-logo.png';
import '../style/main.scss'
import ProductSupply from '../components/store/ProductSupply'
import { useEffect, useState } from 'react'
import { getProducts, postProducts} from '../Services/products';
import { useHistory } from 'react-router-dom'; 
import Modal from 'react-modal';


function ProductsListSupply() {

    const history =  useHistory();
    
    const [products, setProducts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [ newProduct, setNewProduct] = useState({
      "name": "",
      "price": "",
      "imagen": "",
      "type": "burger"
    })
    Modal.setAppElement('#root')

    useEffect(()=> {
      let componentMounted = true;
      const getData = async () =>{
        let response = await getProducts(localStorage.token)
        if(componentMounted) {
        setProducts(response.data)}
      }
      getData()
      return () => componentMounted = false;
    },[products])

    const inputOnChange = (e) => {
      setNewProduct({
        ...newProduct,
        [e.target.name] : e.target.value
    })
    }

    const formProduct = async () => {
       await postProducts(newProduct)
      setModalIsOpen(false)
    }
    
    return (
        <>
            <header className="productSupplyHeader"> 
                <p>Lista de Productos</p>
                <p>Información </p>
            </header>
            <section className="productsListSupply">
                <button onClick={() => setModalIsOpen(true)}> + Agregar producto </button>

                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className="Modal">
                  <i className="far fa-window-close" onClick={() => setModalIsOpen(false)}></i>
                  <section>
                  <form className="form-modal"  >
                    <p>Nombre:<input name="name" onChange={inputOnChange}/></p>
                    <p>Precio:<input name="price" onChange={inputOnChange}/></p>
                    <p>Imagen:<input name="image" onChange={inputOnChange}/></p>
                    <p>Tipo:
                      <select name="type" onChange={inputOnChange}
                        defaultValue="burger"
                      >
                      <option value="drink">Bebidas</option>
                      <option value="burger">Hamburguesas</option>
                      <option value="sandwich">Sandwiches</option>
                      <option value="side dishes">Acompañantes</option>
                    </select></p>
                  </form>
                  <button onClick={formProduct}> Crear Producto</button>
                  </section>
                </Modal>

                <ProductSupply products={products} />
            </section>
            
        </>
    )}

export default ProductsListSupply;