const toggleBtn = document.getElementById('toggleCalendar');
const calendarWrapper = document.getElementById('calendar-wrapper');

toggleBtn.addEventListener('click', () => {
    const isVisible = calendarWrapper.style.display === 'block';
    calendarWrapper.style.display = isVisible ? 'none' : 'block';
    toggleBtn.textContent = isVisible ? '달력 펼치기' : '달력 접기';
});

// 날짜 표시용 (간단히 1~30일만 표시)
const calendarDays = document.getElementById('calendar-days');
for (let i = 1; i <= 30; i++) {
    const day = document.createElement('div');
    day.className = 'day';
    day.textContent = i;
    calendarDays.appendChild(day);
}