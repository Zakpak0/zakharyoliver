import { useState, useEffect } from "react";
import http from "http";
import { CalanderGrid, CalendarBody, CalendarContainer, DateIcon, DateString, RightIcon, LeftIcon, Button } from "./CalendarComponents"
import ProgressBar from '../../components/Progress'
import ScrollBar from "../../components/Scroll";
const CalendarSection = () => {
  const [loading, set_loading] = useState(true);
  const [events, set_events] = useState();
  const [progress, set_progress] = useState(0)
  const [loading_header, set_loading_header] = useState()
  const [date, set_date] = useState({
    currentDate: new Date(),
    day: new Date().getDay(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [appointments, set_appointments] = useState();
  const [booked_dates, set_booked_dates] = useState();
  useEffect(async () => {
    http.get(
      process.env.NEXT_PUBLIC_BACKEND_LAN + "/listevents",
      (response) => {
        let body = "";
        response.on("data", (data) => {
          body += data;
        });
        response.on("close", (form) => {
          let data = JSON.parse(body);
          if (data && typeof data == "object") {
            set_events(data);
          }
        });
      }
    );
    set_loading_header("Calling the google calendar api")
    setTimeout(() => { set_progress(25) }, 500)
    setTimeout(() => { set_progress(50), set_loading_header("Sorting the events on my calendar") }, 1000)
    setTimeout(() => { set_progress(75), set_loading_header("Setting the events on this calendar") }, 1500)
    setTimeout(() => { set_progress(90), set_loading_header("Making the data look good screen") }, 2000)



  }, []);
  let color;
  let months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };
  let { currentDate, day, month, year } = date;
  const previousMonth = () => {
    if (month == 0) {
      (month = 11), (day = 1), (year -= 1);
    } else {
      day = 1;
      month -= 1;
    }
    let newDate = new Date(`${month + 1}/ ${day} / ${year}`);
    set_date({
      currentDate: newDate,
      day: day,
      month: month,
      year: year,
    });
  };

  const nextMonth = () => {
    if (month == 11) {
      (month = 0), (day = 1), (year += 1);
    } else {
      day = 1;
      month += 1;
    }
    let newDate = new Date(`${month + 1}/ ${day} / ${year}`);
    set_date({
      currentDate: newDate,
      day: day,
      month: month,
      year: year,
    });
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
    if (
      events &&
      typeof events == "object" &&
      typeof booked_dates == "object"
    ) {
      if (progress == 90) {
        setTimeout(() => {
          set_progress(100)
          set_loading_header("Cleaning up for a smoothe transition")
          setTimeout(() => {
            set_loading(false)
          }, 1500)
        }, 500)
      }
    }
  }, [events, appointments, booked_dates, progress]);
  useEffect(async () => {
    if (events && typeof events == "object") {
      let days = await events.map((appointment) => {
        let { day, date } = appointment.start.date;
        return date;
      });
      set_appointments(days);
      let booked = {};
      for (let dates of days) {
        if (!booked[dates]) {
          booked[dates] = 0;
        }
        booked[dates] += 1;
      }
      set_booked_dates(booked);
      if (booked_dates && typeof booked_dates == "object") {
        return (
          set_calendar(
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
          )
        )
      }
    }
  }, [events, date, progress]);
  useEffect(() => {



  })
  return (
    <>
      <ScrollBar
        content={


          <CalendarContainer>{loading ? <ProgressBar
            progress={progress}
            loading_header={loading_header}
          /> :
            <>
              <DateString>
                {date ? `${months[month]} ${year.toString()}` : ""}
              </DateString>
              <CalendarBody>
                <Button onClick={() => previousMonth()}>
                  <LeftIcon />
                </Button>
                <CalanderGrid>{calendar}</CalanderGrid>
                <Button onClick={() => nextMonth()}>
                  <RightIcon />
                </Button>
              </CalendarBody>
            </>}</CalendarContainer>

        }
      />
    </>
  );
};

export default CalendarSection;
