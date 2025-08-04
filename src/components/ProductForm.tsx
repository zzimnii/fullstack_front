import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { productService } from "../services/api";

export default function ProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');          // ① string 상태
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const numPrice = Number(price);
        if (isNaN(numPrice) || numPrice < 0) {
            alert('가격을 0 이상 숫자로 입력하세요.');
            return;
        }

        try {
            await productService.create({ name, description, price: numPrice }); // ② 숫자로 변환
            navigate('/products');
        } catch (err) {
            alert('상품 등록 실패!');
            console.error(err);
        }
    };

    return (
        <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">새 상품 등록</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* 상품명 */}
                <div>
                    <label className="block text-sm font-bold mb-1">상품명</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                {/* 설명 */}
                <div>
                    <label className="block text-sm font-bold mb-1">설명</label>
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 py-2 h-28 resize-none focus:outline-none focus:border-orange-400"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                {/* 가격 */}
                <div>
                    <label className="block text-sm font-bold mb-1">가격</label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:border-gray-600"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}     // ③ 그대로 문자열 저장
                        required
                    />
                </div>

                {/* 제출 */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded hover:opacity-90 transition"
                >
                    등록하기
                </button>
            </form>
        </div>
    );
}
