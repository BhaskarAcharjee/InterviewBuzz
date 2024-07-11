import React from "react";
import "./Calender.css";

const timeToGridRow = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const rowStart = Math.floor(hours / 2) + 1; // Assuming timeline starts at 00:00
  const rowEnd = rowStart + (minutes > 0 ? 1 : 0);
  return { rowStart, rowEnd };
};

const getEventClass = (start, end) => {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const startTotalMinutes = startHour * 60 + startMinute;
  const endTotalMinutes = endHour * 60 + endMinute;

  const duration = endTotalMinutes - startTotalMinutes;

  if (duration > 0 && duration <= 60) {
    return "small-time";
  } else if (duration > 60 && duration <= 240) {
    return "medium-time";
  } else if (duration > 240 && duration <= 360) {
    return "large-time";
  } else {
    return "very-large-time";
  }
};

const Calender = ({ interviews }) => {
  return (
    <div className="calendar">
      <div className="timeline">
        <div className="spacer"></div>
        {[...Array(12).keys()].map((i) => (
          <div key={i} className="time-marker">{`${i * 2}:00`}</div>
        ))}
      </div>
      <div className="days">
        {interviews.map((interview, index) => {
          const { rowStart, rowEnd } = timeToGridRow(interview.startTime);
          const endRow = timeToGridRow(interview.endTime).rowStart;
          return (
            <div key={index} className="day">
              <div className="date">
                <p className="date-num">
                  {new Date(interview.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </p>
                <p className="date-day">
                  {new Date(interview.date).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
              </div>
              <div className="events">
                <div
                  className={`event start-${rowStart} end-${endRow} ${getEventClass(
                    interview.startTime,
                    interview.endTime
                  )}`}
                >
                  <p className="title">{interview.company}</p>
                  <p className="time">{`${interview.startTime} - ${interview.endTime}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
