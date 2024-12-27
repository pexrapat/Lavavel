import { Link } from '@inertiajs/react';

export default function Show({ product }) {
    return (
        <div className="bg-white min-h-screen"> {/* Outer background is white */}
            {/* Navbar */}
            <nav className="bg-black text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Everything Market</h1>
                    <div>
                        <Link
                            href="/products"
                            className="text-blue-400 hover:text-blue-500 font-semibold transition duration-200">
                            Back to Products
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto p-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Product Image */}
                        <div className="p-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-auto object-contain p-2"
                                style={{ maxHeight: '500px' }} // Adjust height for better visibility
                            />
                        </div>

                        {/* Product Details (Change background to gray) */}
                        <div className="p-6 flex flex-col justify-center bg-gray-200"> {/* Changed to gray background */}
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                            <p className="text-lg text-gray-600 mb-6">
                                {product.description || "No description available for this product."}
                            </p>
                            <p className="text-2xl font-semibold text-green-500 mb-6">
                                Price: ${product.price}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <button
                                    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                                    Buy Now
                                </button>
                                <button
                                    className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
