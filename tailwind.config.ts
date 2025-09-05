import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'cinzel': ['var(--font-cinzel)', 'serif'],
                'crimson': ['var(--font-crimson)', 'serif'],
                'jetbrains': ['var(--font-jetbrains)', 'monospace'],
            },
            colors: {
                steampunk: {
                    // Primary Colors
                    'brass': '#B8860B',
                    'copper': '#8B4513',
                    'bronze': '#CD853F',
                    'dark-steel': '#2F2F2F',
                    'cream': '#F5F5DC',

                    // Background Colors
                    'dark': '#1a0e08',
                    'darker': '#0f0704',
                    'brown': '#2c1810',

                    // Accent Colors
                    'blue': '#4682B4',
                    'rust': '#CD853F',
                    'red': '#8B0000',
                }
            },
            backgroundImage: {
                'steampunk-gradient': 'linear-gradient(135deg, #2c1810 0%, #1a0e08 50%, #0f0704 100%)',
                'gear-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23B8860B' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='40' r='1'/%3E%3Ccircle cx='40' cy='80' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
            },
            animation: {
                'gear-rotate': 'rotate 20s linear infinite',
                'steam-float': 'float 6s ease-in-out infinite',
                'brass-glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                rotate: {
                    from: { transform: 'rotate(0deg)' },
                    to: { transform: 'rotate(360deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    from: { boxShadow: '0 0 5px #B8860B, 0 0 10px #B8860B' },
                    to: { boxShadow: '0 0 10px #B8860B, 0 0 20px #B8860B, 0 0 30px #B8860B' },
                },
            },
            backdropBlur: {
                'steampunk': '10px',
            },
        },
    },
    plugins: [],
}

export default config