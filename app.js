const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let i = 0;

function mostrarMeses() {
    if (i < 11) {
        setInterval(() => {
            if (i == 3 || i == 5 || i == 8 || i == 10)
                document.querySelector(".tabla1").innerHTML += `<td> ${meses[i]} </td>`
            if (i == 0 || i == 2 || i == 4 || i == 6 || i == 7 || i == 9 || i == 11)
                document.querySelector(".tabla2").innerHTML += `<td> ${meses[i]} </td>`
            i++;
        }, 1200);
    }
}

function repetir() {
    document.querySelector(".tabla1").innerHTML = "<th>Meses con 30 dias</th>";
    document.querySelector(".tabla2").innerHTML = "<th>Meses con 31 dias</th>";
    i = 0;
    mostrarMeses();
}