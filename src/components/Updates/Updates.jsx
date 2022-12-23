import { updateData } from "../../Data/UpdatesData";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="updates">
      {updateData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="" />
            <div className="update-notification">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span>{update.notification}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
