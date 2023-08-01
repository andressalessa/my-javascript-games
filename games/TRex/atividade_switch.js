var tamanhoCopo;
tamanhoCopo = 100;

switch (tamanhoCopo) {
    case 200: desligarCafeteira(3);
        break;
    case 300: desligarCafeteira(5);
        break;
    case 400: desligarCafeteira(10);
        break;

    default: desligarCafeteira(1);
        break;
}


function desligarCafeteira(tempo) {
    console.log('Tempo para desligar: ' + tempo + ' segundos');
}