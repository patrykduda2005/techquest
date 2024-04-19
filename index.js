const smoothScrollIn = () => {
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
        });
    });
});
}

const zakup = kod => {
    document.getElementById("qr").style.display = "inline";
}

const getDays = kod => {
    let days = [];
    for (let i = 0; i < 6; i++) {
        let charCode = (kod.charCodeAt(i) - 63).toString(2); //@ - ~
        for (let j = 0; j < 6 && charCode.charAt(charCode.length - j - 1); j++) {
            if (charCode.charAt(charCode.length - j - 1) == "1") days[((j+1) + (6*i))] = ((j+1) + (6*i))
            else days[((j+1) + (6*i))] = 0;
        }
    }
    console.log(days);
    setCalendar(days);
}

const getCode = days => {
    let binary = "";
    let code = "";
    for(let i = 0; i < 6; i++) {
        for(let j = 5; j >= 0; j--) {
            binary += days[(j+1) + (6*i)] == (j+1) + (6*i) ? "1" : "0";
        }
        let conversion = parseInt(binary,2);
        conversion += 63;
        code += String.fromCharCode(conversion);
        binary = "";
    }
    document.querySelector("#wpisanie form input").value = code;
}

//  ^}{xr@

var globalDays = [];

const updateCalendar = n => {
    if (globalDays[n] == n) {
        globalDays[n] = 0;
    } else globalDays[n] = n;
    getCode(globalDays);
    setCalendar(globalDays);
}

const setCalendar = days => {
    globalDays = days;
    const calendar = document.getElementById("kalendarz");

    const d1 = days[1]== 1 ? '' :"class='no'";
    const d2 = days[2]== 2 ? '' :"class='no'";
    const d3 = days[3]== 3 ? '' :"class='no'";
    const d4 = days[4]== 4 ? '' :"class='no'";
    const d5 = days[5]== 5 ? '' :"class='no'";
    const d6 = days[6]== 6 ? '' :"class='no'";
    const d7 = days[7]== 7 ? '' :"class='no'";
    const d8 = days[8]== 8 ? '' :"class='no'";
    const d9 = days[9]== 9 ? '' :"class='no'";
    const d10 = days[10]== 10 ? '' :"class='no'";
    const d11 = days[11]== 11 ? '' :"class='no'";
    const d12 = days[12]== 12 ? '' :"class='no'";
    const d13 = days[13]== 13 ? '' :"class='no'";
    const d14 = days[14]== 14 ? '' :"class='no'";
    const d15 = days[15]== 15 ? '' :"class='no'";
    const d16 = days[16]== 16 ? '' :"class='no'";
    const d17 = days[17]== 17 ? '' :"class='no'";
    const d18 = days[18]== 18 ? '' :"class='no'";
    const d19 = days[19]== 19 ? '' :"class='no'";
    const d20 = days[20]== 20 ? '' :"class='no'";
    const d21 = days[21]== 21 ? '' :"class='no'";
    const d22 = days[22]== 22 ? '' :"class='no'";
    const d23 = days[23]== 23 ? '' :"class='no'";
    const d24 = days[24]== 24 ? '' :"class='no'";
    const d25 = days[25]== 25 ? '' :"class='no'";
    const d26 = days[26]== 26 ? '' :"class='no'";
    const d27 = days[27]== 27 ? '' :"class='no'";
    const d28 = days[28]== 28 ? '' :"class='no'";
    const d29 = days[29]== 29 ? '' :"class='no'";
    const d30 = days[30]== 30 ? '' :"class='no'";
    const d31 = days[31]== 31 ? '' :"class='no'";
    const d32 = days[32]== 32 ? "class='no'" :"class='no'";
    const d33 = days[33]== 33 ? "class='no'" :"class='no'";
    const d34 = days[34]== 34 ? "class='no'" :"class='no'";
    const d35 = days[35]== 35 ? "class='no'" :"class='no'";
    let con = '' +
                '<table>' +
                    '<tr>' +
                        '<th colspan="7">Kwiecień</th>' +
                    '</tr>' +
                    '<tr>' +
                        '<td onClick="updateCalendar(1)"' + d1 + '>1</td>' +
                        '<td onClick="updateCalendar(2)" ' + d2 + '>2</td>' +
                        '<td onClick="updateCalendar(3)" ' + d3 + '>3</td>' +
                        '<td onClick="updateCalendar(4)" ' + d4 + '>4</td>' +
                        '<td onClick="updateCalendar(5)" ' + d5 + '>5</td>' +
                        '<td onClick="updateCalendar(6)" ' + d6 + ' >6</td>' +
                        '<td onClick="updateCalendar(7)" ' + d7 + ' >7</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td onClick="updateCalendar(8)" ' + d8 + '>8</td>' +
                        '<td onClick="updateCalendar(9)" ' + d9 + '>9</td>' +
                        '<td onClick="updateCalendar(10)" ' + d10 + '>10</td>' +
                        '<td onClick="updateCalendar(11)" ' + d11 + '>11</td>' +
                        '<td onClick="updateCalendar(12)" ' + d12 + '>12</td>' +
                        '<td onClick="updateCalendar(13)" ' + d13 + ' >13</td>' +
                        '<td onClick="updateCalendar(14)" ' + d14 + ' >14</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td onClick="updateCalendar(15)" ' + d15 + '>15</td>' +
                        '<td onClick="updateCalendar(16)" ' + d16 + '>16</td>' +
                        '<td onClick="updateCalendar(17)" ' + d17 + '>17</td>' +
                        '<td onClick="updateCalendar(18)" ' + d18 + '>18</td>' +
                        '<td onClick="updateCalendar(19)" ' + d19 + '>19</td>' +
                        '<td onClick="updateCalendar(20)" ' + d20 + ' >20</td>' +
                        '<td onClick="updateCalendar(21)" ' + d21 + ' >21</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td onClick="updateCalendar(22)" ' + d22 + '>22</td>' +
                        '<td onClick="updateCalendar(23)" ' + d23 + '>23</td>' +
                        '<td onClick="updateCalendar(24)" ' + d24 + '>24</td>' +
                        '<td onClick="updateCalendar(25)" ' + d25 + '>25</td>' +
                        '<td onClick="updateCalendar(26)" ' + d26 + '>26</td>' +
                        '<td onClick="updateCalendar(27)" ' + d27 + ' >27</td>' +
                        '<td onClick="updateCalendar(28)" ' + d28 + ' >28</td>' +
                    '</tr>' +
                    '<tr>' +
                        '<td onClick="updateCalendar(29)" ' + d29 + '>29</td>' +
                        '<td onClick="updateCalendar(30)" ' + d30 + '>30</td>' +
                        '<td onClick="updateCalendar(31)" ' + d31 + '>31</td>' +
                        '<td ' + d32 + '></td>' +
                        '<td ' + d33 + '></td>' +
                        '<td ' + d34 + '></td>' +
                        '<td ' + d35 + '></td>' +
                    '</tr>' +
                '</table>' +
                '<button style="width=100%" onclick="zakup()">Zakup</button>';
    calendar.innerHTML = con;
}


const tempBazaDanych = {
    cards: [
        {
            id: 1,
            days: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 28, 29, 30, 31],
        },
        {
            id: 2,
            days: [1, 2, 3, 4, 8, 9, 10, 11, 12, 15, 16, 17, 18, 21, 22, 23, 24, 25, 28, 29, 30, 31],
        },
    ]
}
