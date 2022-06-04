import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import OrderContext from "./OrderContext";
import validator from "validator";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />,
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const SliderArrow = styled.div`
  &:before {
    color: red;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  flex: 2;
`;

const ContentBox = styled.div`
  border: 3px solid green;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const findOrder = (orderId) => {
  console.log(`valid email:  ${validator.isEmail(orderId)}`);
};

const pickOrder = () => {
  console.log(`go pick order`);
};

const Home = () => {
  const { inputState, setInputState } = useContext(OrderContext);

  return (
    <div>
      <Wrapper>
        <NavBar>
          <Link to="/SelectDish">Dish</Link>
          <button>Drink</button>
          <button>Order</button>
          <button>Receipt</button>
        </NavBar>
      </Wrapper>
      <Wrapper>
        <Container>
          <SimpleSlider></SimpleSlider>
        </Container>
        <ContentBox>
          Order Flow
          <button>
            <Link to="/SelectDish">Dish</Link>
          </button>
        </ContentBox>
      </Wrapper>
      <Wrapper>
        <ContentBox>
          Find Order:
          <input
            type="email"
            placeholder="Your email address"
            onChange={(e) => setInputState(e.target.value)}
          />
          <button onClick={() => findOrder(inputState)}>Find</button>
        </ContentBox>

        <ContentBox>Content Box</ContentBox>
      </Wrapper>
    </div>
  );
};

export default Home;
