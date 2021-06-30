
import '../style/main.scss'
import OrderToKitchenUnitary from './OrderToKitchenUnitary';

function OrdersListKitchen(props) {

  const orders = props.orders;

    return (
      <>
      { orders.map((order) => 
  
        < OrderToKitchenUnitary 
          client={order.client} 
          dateEntry={order.dateEntry} 
          status={order.status} 
          key={order._id} 
          _id={order._id}
          products={order.products.map((item) => <p key={order._id + item.name}> {item.qty} {item.product.name}</p>)}
        
        />
    
      )} </>
    );
}
  
export default OrdersListKitchen;
