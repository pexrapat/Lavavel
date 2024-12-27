import { Link } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <div className="bg-gray-200 min-h-screen">
            {/* Navbar */}
            <nav className="bg-black text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Everything Market</h1>
                    <div className="space-x-4">
                        <Link href="/" className="hover:text-blue-400">Home</Link>
                        <Link href="/products" className="hover:text-blue-400">Products</Link>
                        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Our Products</h1>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md relative overflow-hidden">
                            {/* Add to Cart Button (Top-Right) */}
                            <button
                                className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded hover:bg-green-600 transition duration-200"
                                onClick={() => console.log(`Added ${product.name} to cart`)}
                            >
                                Add to Cart
                            </button>

                            {/* Product Image */}
                            <div className="w-full h-36 bg-gray-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain p-2"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h2>
                                <p className="text-sm text-gray-600 truncate mb-2">{product.description}</p>
                                <p className="text-lg font-semibold text-green-500 mb-2">Price: ${product.price}</p>

                                {/* Buttons */}
                                <div className="flex justify-center space-x-2">
                                    {/* Buy Now Button */}
                                    <button
                                        className="bg-blue-500 text-white font-semibold py-1 px-4 rounded hover:bg-blue-700 transition duration-200"
                                        onClick={() => console.log(`Buying ${product.name}`)}
                                    >
                                        Buy Now
                                    </button>

                                    {/* View Details Link */}
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="bg-gray-500 text-white font-semibold py-1 px-4 rounded hover:bg-gray-700 transition duration-200"
                                    >
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
