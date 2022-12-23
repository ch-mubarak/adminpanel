import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-side">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;
