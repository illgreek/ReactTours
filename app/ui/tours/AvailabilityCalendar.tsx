import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface AvailabilityCalendarProps {
    startDate: Date;
    endDate: Date;
}

const AvailabilityCalendar: React.FC<AvailabilityCalendarProps> = ({
                                                                       startDate,
                                                                       endDate,
                                                                   }) => {
    // Функція для створення масиву дат між початковою та кінцевою датами
    const dateRange = (start: Date, end: Date) => {
        const dates = [];
        let currentDate = new Date(start);

        while (currentDate <= end) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    // Діапазон дат для позначення на календарі
    const markedDates = dateRange(startDate, endDate);

    // Функція для визначення класу для позначення виділених дат
    const tileClassName = ({ date }: { date: Date }) =>
        markedDates.find((markedDate) => markedDate.toDateString() === date.toDateString())
            ? 'availability'
            : '';

    return (
        <div className="availability-calendar my-8">
            <h2 className="text-2xl font-bold mb-4">Availability Calendar</h2>
            <Calendar
                className="rounded-lg shadow-md border-0"
                tileClassName={tileClassName}
                locale="en-US" // Встановлюємо англійську мову
                minDate={startDate} // Мінімальна дата
                maxDate={endDate}   // Максимальна дата
                defaultActiveStartDate={startDate} // Дата початку відображення календаря
                value={startDate}   // Вибрана дата
            />
        </div>
    );
};

export default AvailabilityCalendar;
