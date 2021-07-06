import deleteOrder from '../images/X.svg'
import editOrder from '../images/pen.svg'
import {deleteOrders} from '../Services/orders'
import Modal from 'react-modal';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {putOrders} from '../Services/orders';

function StatusListTable(props) {
    
    const history = useHistory()
    
    Modal.setAppElement('#root')
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [boxModalOpen, setBoxModalIsOpen] = useState(false)
    const [order, setOrder] = useState()

    const deletePostFx = (id) => {
        //console.log(id)
        deleteOrders(localStorage.token, id)
            .then(() => history.go(0))
            .catch(err => console.log(err))
    }

    const handleInputChange = (event) => {
        setOrder({
            ...order,
            [event.target.name] : event.target.value
        })
      }
      console.log(order)

      const updateOrder = (obj, idProduct) =>{
        putOrders(obj, idProduct)
        .then(()=> {
          history.go(0)
         })
         .catch(() => console.log('no se pudieron guardar los cambios'))
        };

    
    return (
        <section className="tableCard" >
            <section className="tableStatus">
                <section className="number">
                    <label ></label>
                </section>
                <p> {props.client} </p>
            </section>
            <section className="statusWrapper">
                <section className={props.status === 'delivering' ? 'statusOk' :'statusAlert'}>
                    <h1> {props.status} </h1>
                </section>
                
                <button><img alt="btn" src={editOrder} onClick={()=> setModalIsOpen(true)}></img></button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={() => setModalIsOpen(false)}
                  className="Modal"
                >
                  <i className="far fa-window-close" name={props.id} onClick={
                    () => setModalIsOpen(false)}></i>
                                <table className="ordersTable">
                                    <tr>
                                        <th>Productos </th>
                                        <th>Cantidad </th>
                                    </tr>
                                    <tbody>
                                    {props.products.map((product)=>
                                            <tr key={product.name +product.product._id}>
                                                <td> {product.product.name} </td>
                                                <td><input defaultValue={product.qty} name="qty" onChange={handleInputChange }></input></td>
                                            </tr>                           
                                        )}

                                    </tbody>

                                </table>
                  <section className="ordersInfo">
                    <p>Nombre:  <input name="client" defaultValue={props.client} onChange={handleInputChange } ></input></p>
                    <button onClick={()=> updateOrder(order, props.orderId)}>Guardar</button>
                  </section>
                </Modal>


                <button><img name={props.orderId} onClick={() => setBoxModalIsOpen(true)} alt="btn" src={deleteOrder}></img></button>
                
                <Modal isOpen={boxModalOpen}
                onRequestClose={() => setBoxModalIsOpen(false)}
                className="Modal">
                  <i className="far fa-window-close" onClick={() => setBoxModalIsOpen(false)}></i>
                  <h3> ¿Segur@ que desea eliminar la orden? </h3>
                  <p> Esta acción será irreversible</p>
                  <button onClick={()=> deletePostFx(props.orderId)}> Eliminar </button>
                  <button  onClick={() => setBoxModalIsOpen(false)} > Cancelar </button>
                </Modal>
            </section>
        </section>
    );
}
  
export default StatusListTable;
