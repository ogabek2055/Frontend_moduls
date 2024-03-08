const inputRoutine = document.getElementById("name_routine");
const inputDate = document.getElementById("date_routine");

let BaseRoutine = [];
let CompRoutine = [];

function addRoutine() {
    if (inputRoutine.value == "" || inputDate.value == "") {
        alert("Not Filled date or Daily-Routine")
    } else {
        const routineObj = {
            id: BaseRoutine.length,
            name: inputRoutine.value,
            date: inputDate.value,
        }
        BaseRoutine.push(routineObj);
        alert("Routine is added successfully !!!")
        console.log(BaseRoutine);
        inputRoutine.value = ""
        inputDate.value = ""
    }
    render();
}

function render() {
    let routineEl = document.getElementById("routine");
    routineEl.innerHTML = "";
    for (var i = 0; i < BaseRoutine.length; i++) {
        const templete = `
        <div class="card my-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${BaseRoutine[i].date} uchun reja !</h5>
            <p class="card-text">${BaseRoutine[i].name}</p>
            <button type="button" onclick="deleted(${BaseRoutine[i].id})" class="btn btn-primary">Delete</button>
            <button type="button" onclick="edited(${BaseRoutine[i].id})" class="btn btn-warning">Edit</button>
            <button type="button" onclick="deleted(${BaseRoutine[i].id})" class="btn btn-success">Complete</button>
        </div>
    </div>
        `
        routineEl.innerHTML += templete;
    }
}

function deleted(id) {
    let arr = [];
    for (let i = 0; i < BaseRoutine.length; i++) {
        if (BaseRoutine[i].id !== id) {
            arr[arr.length] = BaseRoutine[i];
        }
    }
    BaseRoutine = arr;
    render();
}

function edited(id) {
    for (let i = 0; i < BaseRoutine.length; i++) {
        if (BaseRoutine[i].id == id) {
            BaseRoutine[i].name = prompt(`${BaseRoutine[i].name} => Enter new routine`)
            BaseRoutine[i].date = prompt(`${BaseRoutine[i].date} => Enter new date`)
        }
    }
    render();
}

function showCard() {
    let showEl = document.getElementById("showRoutine")
    showEl.innerHTML = "";
    for (var i = 0; i < CompRoutine.length; i++) {
        const templete = `
        <div class="card my-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${CompRoutine[i].date} uchun reja !</h5>
            <p class="card-text">${CompRoutine[i].name}</p>
            <button type="button" onclick="deleted(${CompRoutine[i].id})" class="btn btn-primary">Delete</button>
            <button type="button" onclick="edited(${CompRoutine[i].id})" class="btn btn-warning">Edit</button>
            <button type="button" onclick="deleted(${CompRoutine[i].id})" class="btn btn-success">Complete</button>
        </div>
    </div>
        `
        showEl.innerHTML += templete;
    }
}