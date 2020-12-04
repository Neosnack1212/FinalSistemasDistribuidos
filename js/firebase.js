// Configuracion de la aplicacion web de firebase
var firebaseConfig = {
    apiKey: "AIzaSyA_tcYLlUKonYLtjbEKeyKfvIRMBQntrHs",
    authDomain: "sistemas-distribuidos-ee167.firebaseapp.com",
    databaseURL: "https://sistemas-distribuidos-ee167.firebaseio.com",
    projectId: "sistemas-distribuidos-ee167",
    storageBucket: "sistemas-distribuidos-ee167.appspot.com",
    messagingSenderId: "861125968338",
    appId: "1:861125968338:web:c2c2a4abb2d56948b2080b",
    measurementId: "G-18E0EWNPSV"
};
// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

// Obtiene los valores de la base de datos
const nameRef = firebase.database().ref().child("sensor");

nameRef.on('value', function (snapshot) {
    var tripData = snapshot.val();
    var dia = 0;
    data = [];
    for (let index in tripData) {
        element = tripData[index];
        if (element.tipo == 1) {
            temperatura(element.valor);
        } else if (element.tipo == 2) {
            agua(element.valor);
        } else {
            dia++;
            data.push({ date: new Date(2020, 0, dia), value: element.valor });
        }
        console.log(data);
    }

    //data.push({ date: data[data.length - 1].date, value: data[data.length - 1].value, disabled: false })

    reloadAire();
});
