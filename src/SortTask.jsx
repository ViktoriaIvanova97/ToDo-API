import { useContext } from "react";
import { Context } from "./Context";

const SortTask = () => {
  const { setSortOrder } = useContext(Context);

  return (
    <div className="style">
      <button onClick={() => setSortOrder("desc")}>Новые сверху</button>
      <button onClick={() => setSortOrder("asc")} style={{ marginLeft: "5px" }}>
        Новые снизу
      </button>
    </div>
  );
};

export default SortTask;
