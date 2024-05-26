const ruMomentCustomization = {
    week: {
        dow: 1 // понедельник
    },
    weekdaysShort: ["Вос", "Пон", "Вто", "Сре", "Чет", "Пят", "Суб"],
};
const enMomentCustomization = {
    week: {
        dow: 1 // Monday
    },
};

String.prototype.capitalize = function (){
    return this[0].toUpperCase() + this.slice(1).toLowerCase();
}
function getCustomizationByCulture() {
    switch (currentCulture) {
        case "en":
            return enMomentCustomization;
        case "ru" :
            return ruMomentCustomization;
    }
}

let currentCulture = "en";
moment.updateLocale(currentCulture, getCustomizationByCulture());
let currentDate = moment();


function getWeekdaysNames() {
    return moment.weekdaysShort(true);
}

function changeLanguageHandler(event) {
    const selectedLanguage = event.target.dataset.language;
    currentCulture = selectedLanguage;
    moment.updateLocale(currentCulture, getCustomizationByCulture());
    renderCalendar();
}

function renderLanguages() {
    const languagesButtons =
        document.querySelectorAll("input[type=radio]");
    const [ruButton, enButton] = [...languagesButtons];

    switch (currentCulture) {
        case "en":
            enButton.checked = true;
            break;
        case "ru":
            ruButton.checked = true;
            break;
    }

    languagesButtons.forEach((button) => {
        button.removeEventListener("change", changeLanguageHandler);
        button.addEventListener("change", changeLanguageHandler)
    });
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
        li.innerText = weekday.capitalize();
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
    const monthName = moment.months()[currentDate.month()].capitalize();
    calendarCurrentDate.innerText = `${monthName} ${currentDate.year()}`;
}

function renderDays() {
    const daysInMonth = currentDate.daysInMonth();
    const calendarDatesContainer = document.querySelector(".calendar-dates");
    calendarDatesContainer.innerHTML = "";

    const firstDayInMonth = currentDate.set("date", 1);
    const skipDaysCount = firstDayInMonth.weekday();

    for (let i = 0; i < skipDaysCount; i++) {
        const li = document.createElement("li");
        li.innerText = "";
        calendarDatesContainer.append(li);
    }

    const dateNow = moment();

    for (let i = 1; i <= daysInMonth; i++) {
        const li = document.createElement("li");
        li.innerText = i.toString();

        if (currentDate.format("MM-YYYY") === dateNow.format("MM-YYYY") && dateNow.date() === i) {
            li.className = "active";
        }

        calendarDatesContainer.append(li);
    }
}

function renderCalendar() {
    renderCurrentDate();
    renderWeekdays();
    renderDays();
    renderLanguages();
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