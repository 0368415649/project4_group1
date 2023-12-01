import React, { useRef, useState } from 'react';
import cx from 'classnames';

import { ChevronLeftIcon, ChevronRightIcon } from '../Svg';

import useToggle from '../../hooks/useToggle';
import useOnClickOutside from '../../hooks/useOnClickOutside';

import { getArrayFromNumber } from '../../utils/common';
import { getDateFormat, getUnixTimeInSecond } from '../../utils/dates';

import './DatePicker.scss';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const MONTHS_A_YEAR = 12;

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getStartDayInMonth = (year, month) => {
  return new Date(year, month - 1, 1).getDay();
};

const date = new Date();
const today = date.getDate();
const thisMonth = date.getMonth() + 1;

const DatePicker = ({ value, onChange, className = '' }) => {
  const classes = cx('DatePicker', className);
  const popoverRef = useRef(null);
  const [isShow, setIsShow] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(date.getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(date.getFullYear());
  const [selectedDate, setSelectedDate] = useState();

  const datesCurrentMonth = getDaysInMonth(currentYear, currentMonth);
  const datesPrevMonth = getDaysInMonth(currentYear, currentMonth - 1);

  const startDayInCurrentMonth = getStartDayInMonth(currentYear, currentMonth);
  const startDayInNextMonth = getStartDayInMonth(currentYear, currentMonth + 1);
  const datesInMonth = getArrayFromNumber(datesCurrentMonth);
  const showDatesInPrevMonth = getArrayFromNumber(datesPrevMonth).slice(
    datesPrevMonth - startDayInCurrentMonth,
    datesPrevMonth
  );
  const showDatesInNextMonth = getArrayFromNumber(
    DAYS.length - startDayInNextMonth
  );

  const currentMonthName = MONTH_NAMES[(currentMonth - 1) % MONTHS_A_YEAR];

  const nextMonth = () => {
    setCurrentMonth((prev) => {
      const isLastMonth = prev === MONTHS_A_YEAR;
      if (isLastMonth) {
        setCurrentYear((prev) => {
          return prev + 1;
        });
      }
      return isLastMonth ? 1 : prev + 1;
    });
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => {
      const isFirstMonth = prev === 1;
      if (isFirstMonth) {
        setCurrentYear((prev) => {
          return prev - 1;
        });
      }

      return prev === 1 ? MONTHS_A_YEAR : prev - 1;
    });
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
    onChange(
      getUnixTimeInSecond(new Date(`${currentYear}-${currentMonth}-${date}`))
    );
    setIsShow(false);
  };

  useOnClickOutside(popoverRef, () => setIsShow(false));

  return (
    <div className={classes} ref={popoverRef}>
      <div
        className="DatePicker-handler"
        onClick={() => setIsShow((prev) => !prev)}
      >
        {getDateFormat(new Date(value))}
      </div>
      {isShow && (
        <div className="DatePicker-popover">
          <section className="DatePicker-header">
            <button className="DatePicker-btn" onClick={prevMonth}>
              <ChevronLeftIcon />
            </button>
            {currentMonthName} {currentYear}
            <button className="DatePicker-btn" onClick={nextMonth}>
              <ChevronRightIcon />
            </button>
          </section>
          <section className="DatePicker-body">
            <div className="DatePicker-days">
              {DAYS.map((day) => (
                <div className="DatePicker-item days" key={day}>
                  {day}
                </div>
              ))}
            </div>
            <div className="DatePicker-days">
              {showDatesInPrevMonth.map((date, i) => {
                return (
                  <div className="DatePicker-item muted" key={i}>
                    {date}
                  </div>
                );
              })}
              {datesInMonth.map((date, i) => {
                return (
                  <div
                    className={`DatePicker-item ${
                      date === today && currentMonth === thisMonth
                        ? 'today'
                        : ''
                    } ${
                      selectedDate === date && currentMonth === thisMonth
                        ? 'actived'
                        : ''
                    }`}
                    key={i}
                    onClick={() => handleSelectDate(date)}
                  >
                    {date}
                  </div>
                );
              })}
              {showDatesInNextMonth.map((date, i) => {
                return (
                  <div className="DatePicker-item muted" key={i}>
                    {date}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
