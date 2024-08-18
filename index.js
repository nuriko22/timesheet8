const lessonsAndTime = [[['Разг. о важном', 'Русск. яз.', 'Алгебра', 'Физика', 'Ист/(Исп/Нем)', 'География', 'ОБЖ', 'Лит-ра'],     
                    ['8:30-9:15', '9:25-10:05', '10:15-10:55', '11:10-11:50', '12:05-12:45', '13:00-13:40', '13:50-14:30', '14:40-15:20']],
                 [['Технология', 'Англ. яз.', 'Лит-ра', 'История', 'Алгебра', 'Химия', '', ''],                                  
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '', '']],
                 [['Физ-ра', 'Алгебра', 'Геометрия', 'Общество', 'География', 'Русск. яз.', 'Биология', ''],                 
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '14:15-15:00', '']],
                 [['Рос.- мои гор.', 'Физика', 'Информатика', 'Лит-ра', 'История', 'Англ. яз.', 'Химия', ''],                
                    ['8:30-9:15', '9:25-10:05', '10:15-10:55', '11:10-11:50', '12:05-12:45', '13:00-13:40', '13:50-14:30', '']],
                 [['Русск. яз.', 'Родн. яз/лит-ра', 'Физ-ра', 'Англ. яз.', 'Биология', 'Геометрия', 'Физика', ''],            
                    ['8:30-9:15', '9:25-10:10', '10:20-11:05', '11:20-12:05', '12:20-13:05', '13:20-14:05', '14:15-15:00', '']]];

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
const numLesson = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
const timeLesson = ['onetime', 'twotime', 'threetime', 'fourtime', 'fivetime', 'sixtime', 'seventime', 'eighttime'];

var now = new Date();
str = now.toLocaleString().split(' ');
time = str[1].split(':')[0];
ampm = str[2];
var _day_ = now.getDay();
if (ampm) {_day_ = ampm == "PM" & time >= 5 ? _day_ + 1 : _day_;}
else {_day_ = time >= 17 ? _day_ + 1 : _day_;}
_day_ = _day_ == 0 || _day_ > 5 ? 0 : _day_ - 1;
var day_ = document.getElementById('Day');
day_.innerHTML = days[_day_];
day_.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

for (let i = 0; i < 8; i++){
    var les = document.getElementById(numLesson[i]);
    les.innerHTML = lessonsAndTime[_day_][0][i];
    les.style.cssText = "font-size: 55px; text-align: center;";

    var time = document.getElementById(timeLesson[i]);
    time.innerHTML = lessonsAndTime[_day_][1][i];
    time.style.cssText = "font-size: 55px; text-align: center;";
}

function button(a){
    var day = document.getElementById('Day');
    day.innerHTML = days[a];
    day.style.cssText = "margin: 30px; font-size: 70px; text-align: center;";

    for (let i = 0; i < 8; i++){
        var les = document.getElementById(numLesson[i]);
        les.innerHTML = lessonsAndTime[a][0][i];
        les.style.cssText = "font-size: 55px; text-align: center;";
    
        var time = document.getElementById(timeLesson[i]);
        time.innerHTML = lessonsAndTime[a][1][i];
        time.style.cssText = "font-size: 55px; text-align: center;";
}
}