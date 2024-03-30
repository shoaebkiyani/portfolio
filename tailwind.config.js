import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xs: { max: '399px' },
			sm: { min: '400px', max: '767px' },
			md: { min: '768px' },
			lg: { min: '1024px' },
			xl: { min: '1280px' },
			'2xl': { min: '1536' },
		},
		extend: {
			opacity: ['disabled'],
			animation: {
				'text-slide':
					'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
				slidein300: 'slidein300 1s ease 300ms',
				slidein500: 'slidein500 1s ease 500ms',
				slidein700: 'slidein700 1s ease 700ms',
				slidedown: 'slidedown 2s ease 1000ms',
				pulse: 'pulse 2s infinite alternate ease 1000ms',
				wiggle: 'wiggle 2s linear infinite',
			},
			keyframes: {
				'text-slide': {
					'0%, 16%': {
						transform: 'translateY(0%)',
					},
					'20%, 36%': {
						transform: 'translateY(-16.66%)',
					},
					'40%, 56%': {
						transform: 'translateY(-33.33%)',
					},
					'60%, 76%': {
						transform: 'translateY(-50%)',
					},
					'80%, 96%': {
						transform: 'translateY(-66.66%)',
					},
					'100%': {
						transform: 'translateY(-83.33%)',
					},
				},
				slidein300: {
					from: {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				slidein500: {
					from: {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				slidein700: {
					from: {
						opacity: '0',
						transform: 'translateY(-10px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				slidedown: {
					from: {
						transform: 'translateY(-100%)',
						opacity: '0',
					},
					to: {
						transform: 'translateY(0%)',
						opacity: '1',
					},
				},
				pulse: {
					'0%': {
						transform: 'scale(1)',
					},

					'70%': {
						transform: 'scale(1)',
					},

					'100%': {
						transform: 'scale(1)',
					},
				},
				wiggle: {
					'0% , 7%': {
						transform: 'rotate(0)',
					},
					'15%': {
						transform: 'rotate(0deg)',
					},
					'20%': {
						transform: 'rotate(0.5deg)',
					},
					'25%': {
						transform: 'rotate(-0.5deg)',
					},
					'30%': {
						transform: 'rotate(0.5deg)',
					},
					'35%': {
						transform: 'rotate(-0.5deg)',
					},
					'40%, 100%': {
						transform: 'rotate(0)',
					},
				},
			},

			safelist: [
				'animate-[fade-in_1s_ease-in-out]',
				'animate-[fade-in-down_1s_ease-in-out]',
			],
		},
	},
	variants: {
		fill: ['hover', 'focus'], // this line does the trick
	},
	plugins: [],
};
