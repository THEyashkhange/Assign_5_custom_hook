import useFetch from "../hooks/useFetch";
import "./Products.css";

const Products = () => {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) {
    return <h2 className="status">Loading...</h2>;
  }

  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    <div className="products">
      <h1>Products</h1>

      <div className="grid">
        {data.slice(0, 12).map((item) => (
          <div key={item.id} className="card">
            <img src={item.images[0]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
