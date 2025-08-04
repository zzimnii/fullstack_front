import axios from "axios";
import type {Product} from "../types/Product.ts";

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export const productService = {
    getAll(): Promise<Product[]> {
        return api.get('/products').then(res => res.data);
    },

    getById(id: number): Promise<Product> {
        return api.get(`/products/${id}`).then(res => res.data);
    },

    create(data: Omit<Product, 'id'>): Promise<Product> {
        return api.post('/products', data).then(res => res.data);
    },

    update(id: number, data: Partial<Omit<Product, 'id'>>): Promise<Product> {
        return api.put(`/products/${id}`, data).then(res => res.data);
    },
    delete(id: number): Promise<void> {
        return api.delete(`/products/${id}`).then();
    }
};