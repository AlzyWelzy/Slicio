import HourProps from "../types/Hour";

const NoOrder = ({ openHour, closeHour }: HourProps) => (
  <p>
    We're happy to welcome you between {openHour}:00 and {closeHour}:00.
  </p>
);

export default NoOrder;
