
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
                // Custom colors for our theme
                electric: {
                    DEFAULT: '#0070F3',
                    hover: '#0054B4'
                },
                violet: {
                    DEFAULT: '#6E56CF',
                    hover: '#5A46B0'
                },
                dark: {
                    DEFAULT: '#050505',
                    card: '#111111',
                    accent: '#1A1A1A'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
                'pulse-glow': {
                    '0%, 100%': { 
                        boxShadow: '0 0 10px rgba(110, 86, 207, 0.3)' 
                    },
                    '50%': { 
                        boxShadow: '0 0 20px rgba(110, 86, 207, 0.6)' 
                    }
                },
                'data-flow': {
                    '0%': { 
                        backgroundPosition: '0% 50%' 
                    },
                    '100%': { 
                        backgroundPosition: '100% 50%' 
                    }
                },
                'float': {
                    '0%, 100%': { 
                        transform: 'translateY(0)' 
                    },
                    '50%': { 
                        transform: 'translateY(-10px)' 
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'pulse-glow': 'pulse-glow 3s infinite',
                'data-flow': 'data-flow 15s linear infinite',
                'float': 'float 6s ease-in-out infinite'
			},
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-pattern': "url('/hero-bg.png')",
                'data-grid': "linear-gradient(to right, rgba(110, 86, 207, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(110, 86, 207, 0.1) 1px, transparent 1px)",
            },
            boxShadow: {
                'glow-sm': '0 0 10px rgba(0, 112, 243, 0.4)',
                'glow-md': '0 0 15px rgba(0, 112, 243, 0.5)',
                'glow-lg': '0 0 25px rgba(0, 112, 243, 0.6)',
                'glow-violet': '0 0 15px rgba(110, 86, 207, 0.5)',
            },
            backdropFilter: {
                'none': 'none',
                'blur': 'blur(20px)',
            },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
