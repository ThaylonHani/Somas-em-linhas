function Result() {

    Number1 = (document.querySelector("#Numero1").value);

    Number1 = +Number1;

    Number2 = (document.getElementById('Numero2').value);

    Number2 = +Number2

    simbol = (document.getElementById('UnitySom').value);

    if (simbol == '-') {
        return (document.getElementById('Resultado').value = (Number1 - Number2))

    };
    if (simbol == '+') {
        return (document.getElementById('Resultado').value = (Number1 + Number2))
    };
    if (simbol == '/') {
        return (document.getElementById('Resultado').value = (Number1 / Number2))
    }
    if (simbol == '*') {
        return (document.getElementById('Resultado').value = (Number1 * Number2))
    }


    console.log(Number1);
    console.log(simbol);
    console.log(Number2);


    console.log(typeof Number1)

}