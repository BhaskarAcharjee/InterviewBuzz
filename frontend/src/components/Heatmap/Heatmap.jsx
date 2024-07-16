import React from "react";
import "./Heatmap.css";

const Heatmap = () => {
  const daysInYear = Array.from({ length: 365 }, (_, i) => i);
  const activityData = JSON.parse(localStorage.getItem("activityData")) || {};

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getActivityColor = (date) => {
    const activity = activityData[date] || 0;

    if (activity === 0) {
      return "#ebedf0";
    } else if (activity <= 600) {
      // Up to 10 minutes
      return "#c6e48b";
    } else if (activity <= 1800) {
      // Up to 30 minutes
      return "#7bc96f";
    } else if (activity <= 3600) {
      // Up to 1 hour
      return "#239a3b";
    } else {
      // More than 1 hour
      return "#196127";
    }
  };

  const getTooltipContent = (date, activity) => {
    const minutes = Math.round(activity / 60);
    return `${date}: ${minutes} minutes`;
  };

  const startDate = new Date(new Date().getFullYear(), 0, 1); // Jan 1st of the current year
  const startDay = startDate.getDay(); // Day of the week (0-6, where 0 is Sunday)

  return (
    <div className="heatmap-wrapper">
      <div className="heatmap-months">
        {months.map((month, index) => (
          <div key={index} className="heatmap-month">
            {month}
          </div>
        ))}
      </div>
      <div className="heatmap-container">
        {daysInYear.map((offset) => {
          const date = new Date(new Date().getFullYear(), 0, 1 + offset);
          const dateString = date.toISOString().split("T")[0];
          const activity = activityData[dateString] || 0;

          // Calculate the column and row positions
          const week = Math.floor((offset + startDay) / 7);
          const day = (offset + startDay) % 7;

          return (
            <div
              key={dateString}
              className="heatmap-day"
              style={{
                backgroundColor: getActivityColor(dateString),
                gridColumn: week + 1,
                gridRow: day + 1,
              }}
              data-tooltip={getTooltipContent(dateString, activity)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Heatmap;
