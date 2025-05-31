import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MdCloudUpload } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { sethome } from '../redux/admin';

interface NewProduct {
    name: string;
    price: number;
    category: string;

    image: string;
}

const ROOT_URL = "https://perfstore.onrender.com/api"; //vegapp-1.onrender.com"
const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes

const AddNewProduct: React.FC = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState<NewProduct>({
        name: '',
        price: 0,
        category: '',

        image: '',
    });

    const [imagePreview, setImagePreview] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const [fileError, setFileError] = useState<string | null>(null); // State for file size error

    const categories = ['deodorants', 'spray', 'perfumes'];

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFileError(null); // Clear previous errors

        if (file) {
            if (file.size > MAX_FILE_SIZE) {
                setFileError('File size exceeds the 4MB limit.');
                // Clear the input value so the same file can be selected again after error
                e.target.value = '';
                setImagePreview('');
                setProduct((prev) => ({
                    ...prev,
                    image: '',
                }));
                return; // Stop further processing
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setImagePreview(base64String);
                setProduct((prev) => ({
                    ...prev,
                    image: base64String,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (fileError) {
            console.log("Cannot submit due to file size error.");
            return; // Prevent submission if there's a file size error
        }

        setLoading(true);
        try {
            console.log('Product data:', product);
            const response = await fetch(`${ROOT_URL}/admin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    credentials: "include"
                },
                body: JSON.stringify(product),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Product added successfully!');
                // Reset
                setProduct({
                    name: '',
                    price: 0,
                    category: '',

                    image: '',
                });
                setImagePreview('');
                dispatch(sethome());
            } else {
                console.log(`Error: ${result.message || 'Failed to add product'}`);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 w-full h-full bg-white/85 mx-auto fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[200]">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Add New Pet Product</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={product.name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-green-500 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-2 ">Category</label>
                            <select
                                name="category"
                                value={product.category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md border-green-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Animal Type */}

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}
                                className=" border-green-500 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                            <MdCloudUpload className="w-6 h-6 mr-2 text-green-500" />
                            <span>Upload Image</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
                        </label>
                        {fileError && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-2 text-red-500 text-sm"
                            >
                                {fileError}
                            </motion.p>
                        )}
                        {imagePreview && !fileError && ( // Only show preview if no file error
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                <img src={imagePreview} alt="Preview" className="max-w-[200px] max-h-[200px] object-contain" />
                            </motion.div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading || !!fileError} // Disable if loading or fileError exists
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Adding Product...' : 'Add Product'}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default AddNewProduct;