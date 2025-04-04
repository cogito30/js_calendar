let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();

const generateCalendar = (year, month) => {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const today = new Date();
    const todayDate = today.getDate();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
    
    document.getElementById('month-year').textContent = `${year}년 ${month + 1}월`;

    dayNames.forEach((day, index) => {
        const div = document.createElement('div');
        div.classList.add('day', 'header');
        if (index === 0) div.classList.add('sunday');
        if (index === 6) div.classList.add('saturday')
        div.textContent = day;
        calendar.appendChild(div);
    });

    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendar.appendChild(emptyDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const div = document.createElement('div');
        div.classList.add('day');
        if ((firstDay + day - 1) % 7 === 0) div.classList.add('sunday');
        if ((firstDay + day - 1) % 7 === 6) div.classList.add('saturday');
        if (year === todayYear && month === todayMonth && day === todayDate) {
            div.classList.add('today');
        }
        div.textContent = day;
        calendar.appendChild(div);
    }
};

function changeMonth(step) {
    currentMonth += step;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
}

function goToToday() {
    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    generateCalendar(currentYear, currentMonth);
}

generateCalendar(currentYear, currentMonth);
const prevMonthButton = document.querySelector("#prev-month-button");
prevMonthButton.addEventListener("click", () => { changeMonth(-1) });
const todayButton = document.querySelector("#today-button");
todayButton.onclick = goToToday;
const nextMonthButton = document.querySelector("#next-month-button");
nextMonthButton.addEventListener('click', () => { changeMonth(1) });