import Footer from "./Footer";
import Header from "./Header";

const Container = ({ Children }) => {
  return (
    <div>
      <Header />
      {Children}
      <Footer />
    </div>
  );
};

export default Container;
