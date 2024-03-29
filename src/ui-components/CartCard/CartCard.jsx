import Button from "../Button/Button";
import "./CartCard.css";

const CartCard = () => {
  return (
    <div className="c-cart">
      <section className="c-cart-img">
        <img src="/images/ear1.png" alt="" />
      </section>
      <section className="c-cart-bd">
        <header>
          <span>Lira Earings</span>
          <Button className={'c-x'}>x</Button>
        </header>
        <main>
          <p>Black/Medium</p>
          <span>$20.00</span>
        </main>

        <div>
          QTY:
          <Button className={"c-cart-btn"} btnType={"ghost"}>
            -
          </Button>
          36
          <Button className={"c-cart-btn"} btnType={"ghost"}>
            +
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CartCard;
