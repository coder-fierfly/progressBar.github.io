const progressBar = document.querySelector('.progress-bar');

const inputField = document.getElementById('progress-input');

const checkboxRotation = document.getElementById('rotation-toggle');

const checkboxHide = document.getElementById('hide-toggle');

const progressCircle = document.querySelector('.progress-circle ');

const circumference = 2 * Math.PI * 90;

// Функция обновления прогресса
function updateProgress(value) {
    progressBar.style.strokeDashoffset = circumference - (value / 100) * circumference;
}

// Событие при вводе значения
inputField.addEventListener('input', (e) => {
    console.log(parseFloat(e.target.value))
    console.log("!!")
    let value = parseFloat(e.target.value);

    if (e.target.value.trim() === "") {
        if (checkboxRotation.checked) {
            checkboxRotation.checked = false;
            progressCircle.classList.remove('rotate');
        }
        updateProgress(0);
        return;
    }

    if (value > 100 || value < 0) {
        alert("Пожалуйста, введите число от 0 до 100.");
        inputField.value = "";
        updateProgress(0);
        return;
    }
    updateProgress(value);
});

// Для вращения
checkboxRotation.addEventListener('change', function () {
    if (this.checked) {
        progressCircle.classList.add('rotate');
    } else {
        progressCircle.classList.remove('rotate');
    }
});

// Для скрытия
checkboxHide.addEventListener('change', function () {
    if (this.checked) {
        progressCircle.classList.add('hidden-block');
    } else {
        progressCircle.classList.remove('hidden-block');
    }
});

// Инициализация начального прогресса
updateProgress(0);