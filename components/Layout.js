import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();
  
  // Check if current path is /auth/login
  const isAuthPage = router.pathname === '/auth/login';

  return (
    <div className="site">
      {!isAuthPage && <Header />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
}