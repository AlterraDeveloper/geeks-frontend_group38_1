const currentDate = moment();

function getWeekdaysNames() {
    return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
}

function renderWeekdays() {
    // map: string -> html

    const weekdays = getWeekdaysNames();

    // for(const weekday of weekdays){
    //     const li = document.createElement("li");
    //     li.innerText = weekday;
    // }

    const htmlElements = weekdays.map(function (weekday) {
        const li = document.createElement("li");
        li.innerText = weekday;
        return li;
    });

    const calendarWeekdaysContainer = document.querySelector(".calendar-weekdays");
    calendarWeekdaysContainer.innerHTML = "";
    calendarWeekdaysContainer.append(...htmlElements);
    // (li, li, li, li)
    // (...[li, li, li, li]) -> (li, li, li, li)
}

function renderCurrentDate() {
    const calendarCurrentDate = document.querySelector(".calendar-current-date");
    calendarCurrentDate.innerText = currentDate.format("MMMM YYYY");
}

function renderDays() {

    const daysInMonth = currentDate.daysInMonth();
    const calendarDatesContainer = document.querySelector(".calendar-dates");
    calendarDatesContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set("date", 1);
    const skipDaysCount = firstDayInMonth.weekday() - 1;

    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDatesContainer.append(li);
    }

    const dateNow = moment();

    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();

        if(currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i){
            li.className = "active";
        }

        calendarDatesContainer.append(li);
    }
}

function renderCalendar(){
    renderCurrentDate();
    renderWeekdays();
    renderDays();
}

const [prevBtn, nextBtn] = [...document.querySelectorAll(".calendar-navigation span")];

prevBtn.onclick = () => {
    currentDate.subtract(1, "month");
    renderCalendar();
}

nextBtn.onclick = () => {
    currentDate.add(1, "month");
    renderCalendar();
}

renderCalendar();