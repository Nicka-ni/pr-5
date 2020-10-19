const str1 = "мама мыла раму";
const str2 = "собака друг человека";

function countLetters(str, let){
    let count = 0;
    for (char of str){
        if (char == let){
            count++;
        }
    }
    return count;
}

function getRow(){
    let letter = prompt("Введите букву")
    if(countLetters(str1, letter)>countLetters(str2, letter)){
        alert(str1)
    }
    else 
    {
        alert(str2)
    }
}

getRow()

function insertСhar(string, char, pos) {
    return string.slice(0, pos) + char + string.slice(pos);
}

function formatPhone(phone_number) {
    let phone = phone_number;
    if (phone.length == 10) {
        phone = insertСhar(phone, "+7", 0);
    }

    if (phone.length == 11 && phone[0] == "8") {
        phone = phone.slice(1);
        phone = insertСhar(phone, "+7", 0);
    }

    if (phone.length != 12) {
        alert("Не корректный ввод");
        return
    }

    let i = 0;

    while (i != phone.length) {
        let char = phone[i];
        if ((i == 2 || i == 8) && char != " ") {
            phone = insertСhar(phone, " ", i);
        }

        if (i == 3 && char != "(") {
            phone = insertСhar(phone, "(", i);
        }

        if (i == 7 && char != ")") {
            phone = insertСhar(phone, ")", i);
        }

        if ((i == 12 || i == 15) && char != "-") {
            phone = insertСhar(phone, "-", i);
        }

        i++;
    }

    alert(phone)
}

formatPhone(prompt("Введите номер телефона"))