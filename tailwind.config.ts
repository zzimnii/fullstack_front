import type {Config} from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{js, ts, jsx, tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Pretendard Variable", 'sans-serif'],
                pretendard: ["Pretendard", 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;