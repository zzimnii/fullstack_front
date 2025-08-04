import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="text-center space-y-6">
            <h1 className="text-3xl font-bold text-black">환영합니다 </h1>
            <p className="text-gray-700">제품 목록을 확인하거나 새 제품을 등록해보세요.</p>
            <div className="flex justify-center gap-4 mt-6">
                <Link
                    to="/products"
                    className="px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                    상품 목록 보기
                </Link>
                <Link
                    to="/products/new"
                    className="px-5 py-2 border border-black text-black rounded hover:bg-gray-100 transition"
                >
                    상품 등록
                </Link>
            </div>
        </div>
    );
}
