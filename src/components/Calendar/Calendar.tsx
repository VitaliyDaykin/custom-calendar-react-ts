interface CalendarProps {
    locale?: string;
    selecteDate: Date;
    selectDate: (date: Date) => void;
}

export const Calendar: React.FC = () => {
    console.log("@");

    return (
        <>
            <div>Calendar</div>
        </>
    );
};
