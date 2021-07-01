
import '../style/main.scss'
import SupplyUnitaryItem from './SupplyUnitaryItem';

function ProductSupply(props) {

  const products = props.products;

  const listProductSupply = products.map((product) => 
  
    <SupplyUnitaryItem productName={product.name} productItemImg={product.image} id={product._id} key={product._id}/>

  );
    return (
      <>{listProductSupply}</>
    );
}
  
export default ProductSupply;
