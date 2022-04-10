import { c, css, useProp } from "atomico";
import { getMonthRowsFromDate } from "@uppercod/calendar";
import { Button } from "../button/button";
import customElements from "../custom-elements";

function calendar() {
    const month = getMonthRowsFromDate(new Date(2022, 1));
    const [fistWeek] = month;
    const [currentDay, setCurrentDay] = useProp<Date>("day");

    return (
        <host shadowDom>
            <table>
                <tr>
                    {fistWeek.map((day) => (
                        <td class="td">
                            {day
                                .toLocaleDateString(undefined, {
                                    weekday: "short",
                                })
                                .replace(".", "")}
                        </td>
                    ))}
                </tr>
                {month.map((week) => (
                    <tr>
                        {week.map((day) => (
                            <td class="td">
                                <Button
                                    size="small"
                                    class="button"
                                    ghost={
                                        day.getTime() !== currentDay?.getTime()
                                    }
                                    onclick={(event) => {
                                        setCurrentDay(day);
                                        console.log(day);
                                    }}
                                >
                                    <strong slot="prefix">
                                        {day.getDate()}
                                    </strong>
                                </Button>
                            </td>
                        ))}
                    </tr>
                ))}
            </table>
        </host>
    );
}

calendar.props = {
    day: Date,
};

calendar.styles = css`
    :host {
        display: block;
    }
    .td {
        text-align: center;
    }
`;

export const Calendar = c(calendar);

customElements.define("input-calendar", Calendar);
