import { useState, useEffect} from "react";
import ProductList from "./ProductList";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");

                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }

                const data = await response.json();
                setProducts(data);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="status">Loading users...</p>;
    if (error) return <p className="status error">Error: {error}</p>;

    return (
        <div className="dashboard">
            <h1>Product Dashboard</h1>
            <ProductList products={products} />
        </div>
    )
}

export default Dashboard;