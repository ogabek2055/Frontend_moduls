const formContact = document.querySelector("#formContact");

let contacts = [];

class Contact {
    constructor(name, tel) {
        this.id = contacts.length;
        this.name = name;
        this.tel = tel;
    }
    save() {
        contacts.push(this);
    }

    static render() {
        todoList.innerHTML = "";
        contacts.forEach((contact) => {
            const { id, name, tel } = contact;
            let temp = `
      <div class="user">
        <h2>Name: ${name}</h2>
        <h2>Phone Number: +${tel}</h2>
        <button type="button" onclick="deleted(${id})">Delete</button>
        <button type="button" onclick="edited(${id})">Edit</button>
        </div>
        `;
            todoList.innerHTML += temp;
        });
    }
    static  deletedCon(id) {
        console.log("working");
        let deletedContact = []
        contacts.forEach((contact => {
            console.log(contact);
            if (contact.id !== id) {
                deletedContact.push(contact)
            }
        })
        )
       contacts = deletedContact
       Contact.render()
    }

    static  editedCon(id) {
        console.log("working");
        const Newname = prompt("New Name")
        const Newnumber = +prompt("New Number")
        contacts.forEach((contact => {
            console.log(contact);
            if (contact.id == id) {
                contact.name = Newname
                contact.tel = Newnumber
            }
        })
        )
       Contact.render()
    }
}

function deleted(id) {
    Contact.deletedCon(id)
}


function edited(id) {
    Contact.editedCon(id)
}


formContact.addEventListener("submit", (event) => {
    event.preventDefault();

    const [name, tel] = event.target;
    const contactt = new Contact(name.value, tel.value);
    contactt.save();
    Contact.render(contacts);
    // console.log(contactt);
    // console.log(contacts);
});
