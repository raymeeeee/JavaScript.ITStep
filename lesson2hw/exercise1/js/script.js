let languages = 0;
confirm("Do you speak English?") ? languages++ : null;
confirm("Parlez-vous Francais?") ? languages++ : null;
confirm("Sprechen Zi Deutch?") ? languages++ : null;
confirm("Чи володієте Ви українською мовою?") ? languages++ : null;
confirm("Говорите по-русски?") ? languages++ : null;
confirm("НаЫа Usted...espanol?") ? languages++ : null;

let word = "";
if (languages == 0 || languages >= 5) {
    word = "языков";
}
else if(languages == 1) {
    word = "язык";
}
else {
    word = "языка";
}
alert(`Вы знаете ${languages} ${word}`)
