function ProductCard({ product }) {
    return (
        <div className="card">
            <h2 className="product-title">{product.title}</h2>
            <img
                src={product.image}
                alt={product.title}
                className="product-image"
            />

            <p className="product-category">
                <strong>Category:</strong> {product.category}
            </p>

            <p className="product-description">
                {product.description}
            </p>

            <p className="product-price">
                <strong>Price:</strong> ${product.price}
            </p>

            {product.rating && (
                <div className="product-rating">
                    <p><strong>Rating:</strong> {product.rating.rate}</p>
                    <p><strong>Reviews:</strong> {product.rating.count}</p>
                </div>
            )}
        </div>
    );
}

export default ProductCard;
