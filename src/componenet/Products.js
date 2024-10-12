import { Link } from "react-router-dom";
import './Slider.css';

function Product(props)
{
    const {product,showButton} =props;
    return(
    <>
        <div className="card">
          <img src={product.image} class="card-img-top h-100" alt={product.title}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price :{product.price}$</p>
          {
           showButton && <Link href="#" className="btn btn-primary" to={'/product/${product.id}'}>Details</Link>
          }
        </div>
        </div>
    </>
    );
}
export default Product;