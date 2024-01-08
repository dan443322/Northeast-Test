

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar() {
    const calendarBody = document.getElementById('calendar').getElementsByTagName('tbody')[0];
    const monthYearHeader = document.getElementById('month-year');

    monthYearHeader.textContent = `${monthNames[currentMonth]} ${currentYear}`;

    // Clear previous content
    calendarBody.innerHTML = '';

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
        const row = calendarBody.insertRow();

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
                row.insertCell();
            } else {
                const cell = row.insertCell();
                cell.textContent = dayCounter;

                cell.addEventListener('click', function() {
                    const clickedDate = new Date(currentYear, currentMonth, parseInt(cell.textContent));
                    console.log('Clicked Date:', clickedDate.toDateString());
                });

                dayCounter++;
            }
        }
    }
}

function prevMonth() {
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    if (currentMonth === 11) {
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
    if (currentMonth === 0) {
        currentYear++;
    }
    renderCalendar();
}

// Initial rendering
renderCalendar();