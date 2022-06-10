import React from "react";
import { createDate, createMonth } from "../../../utils/helpers/date";

interface UseCalendarProps {
    locale?: string;
    selecteDate: Date;
}

export const useCalendar = ({
    locale,
    selecteDate: date,
}: UseCalendarProps) => {
    const [mode, setMode] = React.useState<"days" | "monthes" | "yars">("days");
    const [selecteDate, setSelecteDate] = React.useState(createDate({ date }));
    const [selecteMonth, setSelecteMonth] = React.useState(
        createMonth({
            date: new Date(selecteDate.year, selecteDate.monthIndex),
            locale,
        })
    );

    const [selecteYear, setSelecteYear] = React.useState(selecteDate.year);

    const monthesnames = React.useMemo;
    return {};
};
