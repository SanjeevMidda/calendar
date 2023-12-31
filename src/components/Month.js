import React from "react";

const Month = ({ noOfDays }) => {
  return (
    <div className="month">
      {noOfDays[0].map((number) => {
        return <h3>{number}</h3>;
      })}
    </div>
  );
};

export default Month;
