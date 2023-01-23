import Header from "./components/Header";
import OrderContent from "./components/OrderContent";
import AnnualContainer from "./components/AnnualContainer";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container border p-0 pb-5 bg-white">
        <Header />
        <OrderContent />
        <AnnualContainer />
        <Button />
      </div>
      <Footer />
    </>
  );
}

export default App;
