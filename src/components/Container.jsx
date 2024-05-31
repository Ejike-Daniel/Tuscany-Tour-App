import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
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
