    function cesar(str, shift, action) {

        str = str.toLowerCase();
        let newString = "";

        
        if ( action == "encode" ) {

            let alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
            let newAlf = alf.slice(shift) + alf.slice(0, shift); // сначала берем буквы спереди и добавляем их вконец

           
        
            for(let i = 0; i < str.length; i++) {
                if ( str[i] == " ") {
                    newString += " ";
                    continue;
                }

                newString += newAlf[alf.indexOf(str[i])]; // берем из нового алфавита символ с тем индексом, с которым старый символ стоял в старом алфавите (сопоставляем индексы)]
            }


        }

        else if ( action == "decode" ) {

            let alf = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
            let newAlf = alf.slice(33-shift , 33) + alf.slice(0, 33-shift); // сначала берем буквы с конца потом прибавляем их вначало // сдвиг в обратную стророну

            for(let i = 0; i < str.length; i++) {
                if ( str[i] == " ") {
                    newString += " ";
                    continue;
                }

                newString += newAlf[alf.indexOf(str[i])]; // берем из нового алфавита символ с тем индексом, с которым старый символ стоял в старом алфавите (сопоставляем индексы)]
            }


        }


        else {
            alert("action не определен");
        }

        return newString;

    }

    // str = prompt("Введите строчку");
    // key = prompt("Введите ключ");
    // doing = prompt("Введите действие: \n encode - зашифровать \n decode - расшифровать");

    // alert (cesar( str , key , doing ));