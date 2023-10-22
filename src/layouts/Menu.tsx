import Pizza from "../components/Pizza";
import pizzaData from "../utilities/PizzaData";

const Menu = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzaData.length;
  const yesPizza =
    "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.";
  const noPizza = "We're still working on our menu. Please come back later. :)";
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>{yesPizza}</p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>{noPizza}</p>
      )}
    </main>
  );
};

export default Menu;
