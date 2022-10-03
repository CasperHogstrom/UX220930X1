const lost = new XMLHttpRequest();
lost.open('GET', 'structure.json')
lost.send();

const car = new XMLHttpRequest();
car.open('GET', 'cars.json');
car.send();


lost.onload = () => {
    const keys = JSON.parse(lost.responseText);

    for ( const key in keys) {
        var header = document.createElement(key);
        header.innerHTML = (keys[key]);
        Main.appendChild(header);
    };
};



DriveList = () => {
    var CarUl = document.getElementById('UlCars');
    var cars = JSON.parse(car.responseText)
    console.log(cars);

    cars.Cars.forEach(bee => {
        var listElements = document.createElement('li')
        listElements.innerHTML = (`${bee.Brand} ${bee.Modell} ${bee.Year}`);
        CarUl.appendChild(listElements);
    });


};
