import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { NotFound } from './pages/NotFound';
import { 
  PaperPlateRawMaterials, 
  SilverPaper, 
  KraftPaper, 
  Chipboard, 
  PaperPlates 
} from './pages/Categories';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="paper-plate-raw-materials" element={<PaperPlateRawMaterials />} />
        <Route path="silver-paper" element={<SilverPaper />} />
        <Route path="kraft-paper" element={<KraftPaper />} />
        <Route path="chipboard" element={<Chipboard />} />
        <Route path="paper-plates" element={<PaperPlates />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
