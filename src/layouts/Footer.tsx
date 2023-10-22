import Closed from "../components/Closed";
import NoOrder from "../components/NoOrder";
import Order from "../components/Order";

const Footer = () => {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  !isOpen && <Closed openHour={openHour} closeHour={closeHour} />;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <NoOrder openHour={openHour} closeHour={closeHour} />
      )}
    </footer>
  );
};

export default Footer;
