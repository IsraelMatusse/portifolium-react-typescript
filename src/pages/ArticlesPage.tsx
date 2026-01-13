import Articles from '../components/Articles';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

export default function ArticlesPage() {

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <Articles />
      <Footer />
    </div>
  );
}
