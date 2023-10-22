import PizzaProps from "../types/PizzaProps";

const Pizza = ({ pizza }: PizzaProps) => {
  return (
    <li className={`pizza ${pizza.soldOut && "sold-out"}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : `₹${pizza.price}0`}</span>
      </div>
    </li>
  );
};

export default Pizza;
