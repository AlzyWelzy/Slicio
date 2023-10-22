import HourProps from "../types/Hour";

const Order = ({ openHour, closeHour }: HourProps) => (
  <div className="order">
    <p>
      We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
      online.
    </p>
    <button className="btn">Order</button>
  </div>
);

export default Order;
