import React from "react";
import Balance from "./Balance";
import DaysToProgress from "./DaysToProgress";
export const Header = () => {
  return (
    <div>
      <div className="left-section">
        <div>
          <Balance />
        </div>
        <DaysToProgress />
      </div>
      <div className="right-section"></div>
    </div>
  );
};
