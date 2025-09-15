const lessonsAndTime = [[['англ яз', 'матем д', 'история', 'алгебра', 'геометр', 'Классный час', 'русский д', 'физра'],     
                    ['8:00-8:45', '9:00-9:45', '10:00-10:45', '10:55-11:40', '12:00-12:45', '13:05-13:50', '14:00-14:45', '14:55-15:40']],
                 [['алгебра', 'алгебра', 'литра', 'русский', 'общество', 'муз.инI-музлитII', 'муз.инII-музлитI', ''],                                  
                    ['8:00-8:45', '9:00-9:45', '10:00-10:45', '10:55-11:40', '12:00-12:45', '13:05-13:50', '14:00-14:45']],
                 [['', 'физра', 'физика', 'литра', 'литра', 'история', 'искусство', 'сольф'],                 
                    ['8:00-8:45', '9:00-9:45', '10:00-10:45', '10:55-11:40', '12:00-12:45', '13:05-13:50', '14:00-14:45', '14:55-15:40']],
                 [['гармония', 'музлит', 'гармI-музлитII', 'гармII-музлитI', 'инструм.вед', 'русский', 'литер д', 'общество д'],                
                    ['8:00-8:45', '9:00-9:45', '10:00-10:45', '10:55-11:40', '12:00-12:45', '13:05-13:50', '14:00-14:45', '14:55-15:40']],
                 [['', 'творческий', 'день', '', '', '', '', ''],            
                    ['', '', '', '', '', '', '', '']],
                  [['сольфI-англII', 'сольфII-инфI', 'англI-инфII', 'Физика', 'география', 'геометрия', 'биология', ''],
                    ['8:00-8:45', '9:00-9:45', '10:00-10:45', '10:55-11:40', '12:00-12:45', '13:05-13:50', '14:00-14:45', '']]];

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const numLesson = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
const timeLesson = ['onetime', 'twotime', 'threetime', 'fourtime', 'fivetime', 'sixtime', 'seventime', 'eighttime'];

var now = new Date();
str = now.toLocaleString().split(' ');
time = str[1].split(':')[0];
ampm = str[2];
var _day_ = now.getDay();
if (ampm) {_day_ = ampm == "PM" & time >= 5 ? _day_ + 1 : _day_;}
else {_day_ = time >= 17 ? _day_ + 1 : _day_;}
_day_ = _day_ == 0 || _day_ > 6 ? 0 : _day_ - 1;
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


