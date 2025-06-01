import NavigationBar from '../components/navbar/Navigation_bar';
import Footer from '../components/footer/Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
