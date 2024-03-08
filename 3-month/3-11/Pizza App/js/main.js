let carsBase = []

let carsObj = {
    prices: {
        nexia1: 5000,
        nexia2: 6000,
        nexia3: 10000,
        damas: 8800,
        labo: 8500,
        kobl: 13000,
        lecetti: 8000,
        jentra: 1,
        malubi: 17000,
        onix: 15000,
        tracker: 18000,
        trailblazer: 50000,
        equinox: 35000,
    },
}

function submitCarsForm(event) {
    event.preventDefault();
    console.dir(event);

    const fullname = event.target[0].value;
    const phoneNumber = event.target[1].value;
    const address = event.target[2].value;
    // const cars = event.target[3].value;

    carObject = {
        fullname,
        phoneNumber,
        address,
        
    }
     
    carsBase.push(carObject);
    // console.log(carsBase);
}


