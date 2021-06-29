
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
          products={order.products.map((item) => <p> {item.qty} {item.product.name}</p>)}
        
        />
    
      )} </>
    );
}
  
export default OrdersListKitchen;
