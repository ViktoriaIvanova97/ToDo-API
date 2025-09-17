import { useContext } from "react";
import { Context } from "./Context";

const CountActive = () => {
  const { tasks } = useContext(Context);
  const count = tasks.filter((item) => !item.isDone).length;
  return (
    <div >
      <p>Осталось дел: {count}</p>
    </div>
  );
};

export default CountActive;
