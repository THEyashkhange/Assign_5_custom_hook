import useFetch from "../hooks/useFetch";
import "./Products.css";

function Products() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  if (loading) {
    return <div className="status">Loading products</div>;
  }

  if (error) {
    return <div className="status error">{error}</div>;
  }

  return (
    <div className="products">
      <h2>Products</h2>
      <div className="grid">
        {data.slice(0, 16).map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
