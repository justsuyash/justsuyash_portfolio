import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Suyash | Portfolio',
    description: 'Data Scientist & Strategist - Portfolio of Suyash.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <footer style={{
                    padding: '48px 0',
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.3)',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    marginTop: '80px'
                }}>
                    <p>© {new Date().getFullYear()} Suyash. Built with intent.</p>
                </footer>
            </body>
        </html>
    );
}
