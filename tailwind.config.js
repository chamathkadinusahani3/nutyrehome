export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#FFD400',
          hover: '#EAB308',
        },
        ink: '#000000',
        subtle: '#6B7280',
        hairline: '#E5E7EB',
        accent: '#F97316',
        success: '#22C55E',
        danger: '#EF4444',
        soft: '#F8FAFC',
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '24px',
      },
      maxWidth: {
        site: '1440px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(17,24,39,0.04), 0 8px 24px rgba(17,24,39,0.06)',
        float: '0 10px 40px rgba(17,24,39,0.10)',
        header: '0 4px 20px rgba(17,24,39,0.06)',
      },
    },
  },
  plugins: [],
}
