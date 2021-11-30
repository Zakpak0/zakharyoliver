import { useState, useEffect } from "react";
import http from "http";
import { H1, H2, A, P, Button, Input, Div } from "../pages/index.tsx";
import { styled } from "@stitches/react";
import {
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
const CalendarSection = () => {
  const [events, set_events] = useState();
  const [date, set_date] = useState({
    currentDate: new Date(),
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [appointments, set_appointments] = useState();
  const [booked_dates, set_booked_dates] = useState();
  let color;
  let months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  let { currentDate, day, month, year } = date;
  const previousMonth = () => {
    if (month == 0) {
      (month = 11), (day = 1), (year -= 1);
    } else {
      day = 1;
      month -= 1;
    }
    let newDate = new Date(`${month}/ ${day} / ${year}`);
    set_date({
      currentDate: newDate,
      day: day,
      month: month,
      year: year,
    });
    console.log("date now", date);
  };

  const nextMonth = () => {
    if (month == 11) {
      (month = 0), (day = 1), (year += 1);
    } else {
      day = 1;
      month += 1;
    }
    let newDate = new Date(`${month}/ ${day} / ${year}`);
    set_date({
      currentDate: newDate,
      day: day,
      month: month,
      year: year,
    });
    console.log("date now", date);
  };
  const getDaysInMonth = () => {
    let days = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();
    let dates = [];
    for (let i = 1; i <= days; i++) {
      dates.push({
        day: i,
        date: `${currentDate.getMonth() + 1}/${i}/${currentDate.getFullYear()}`,
      });
      if (i == days) {
        return dates;
      }
    }
    return dates;
  };
  const DateString = styled("h3", {});
  const CalendarContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    border: "solid",
    borderColor: "AliceBlue",
    justifyContent: "center",
    alignItems: "center",
  });
  const CalendarBody = styled("div", {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "max-content",
    width: "max-content",
    padding: "10px 10px 10px 10px",
  });
  const Button = styled("button", {
    display: "contents",
  });
  const LeftIcon = styled(DoubleArrowLeftIcon, {
    margin: "3px 10px 50px 5px",
  });
  const RightIcon = styled(DoubleArrowRightIcon, {
    margin: "3px 5px 50px 10px",
  });
  const DateIcon = styled("p", {
    display: "flex",
    border: "solid",
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    margin: "3px 10px 3px 10px",
  });
  const CalanderGrid = styled("div", {
    display: "grid",
    gridTemplateColumns: "2fr 2fr 2fr 2fr 2fr 2fr 2fr",
  });
  const [calendar, set_calendar] = useState(
    getDaysInMonth().map((calendar) => {
      let { day, date } = calendar;
      if (booked_dates)
        if (!booked_dates[date]) {
          color = "White";
        } else if (booked_dates[date] <= 3) {
          color = "LawnGreen";
        } else if (booked_dates[date] <= 5) {
          color = "Yellow";
        } else if (booked_dates[date] > 6) {
          color = "Salmon";
        }
      return (
        <DateIcon
          css={{
            borderColor: "DarkSeaGreen",
            backgroundColor: color,
          }}
          key={day}
          value={day}
        >
          {day}
        </DateIcon>
      );
    })
  );
  useEffect(() => {
    if (events) {
      let days = events.map((appointment) => {
        let { day, date } = appointment.start.date;
        return date;
      });
      set_appointments(days);
      let booked = {};
      if (appointments) {
        for (let dates of appointments) {
          if (!booked[dates]) {
            booked[dates] = 0;
          }
          booked[dates] += 1;
        }
        set_booked_dates(booked);
      }
      return set_calendar(
        getDaysInMonth().map((calendar) => {
          let { day, date } = calendar;
          if (booked_dates)
            if (!booked_dates[date]) {
              color = "White";
            } else if (booked_dates[date] <= 3) {
              color = "LawnGreen";
            } else if (booked_dates[date] <= 5) {
              color = "Yellow";
            } else if (booked_dates[date] > 6) {
              color = "Salmon";
            }
          return (
            <DateIcon
              css={{
                borderColor: "DarkSeaGreen",
                backgroundColor: color,
              }}
              key={day}
              value={day}
            >
              {day}
            </DateIcon>
          );
        })
      );
    }
  }, [events, date]);
  useEffect(() => {
    http.get("http://localhost:3200/listevents", (response) => {
      let body = "";
      response.on("data", (data) => {
        body += data;
      });
      response.on("close", (form) => {
        let data = JSON.parse(body);
        set_events(data);
      });
    });
  }, []);
  return (
    <>
      <CalendarContainer>
        <DateString>{date ? months[month] : ""}</DateString>
        <CalendarBody>
          <Button onClick={() => previousMonth()}>
            <LeftIcon />
          </Button>
          <CalanderGrid>{calendar}</CalanderGrid>
          <Button onClick={() => nextMonth()}>
            <RightIcon />
          </Button>
        </CalendarBody>
      </CalendarContainer>
    </>
  );
};

export default CalendarSection;
