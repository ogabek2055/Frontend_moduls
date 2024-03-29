const createMemberForm = document.querySelector("#createMember")
const membersTableBody = document.querySelector("#membersTableBody")
const createMembership = document.querySelector("#createMembership")
const addMembershipBtn = document.querySelector("#addMembershipBtn")
//? Member Modal Elements 
const title = document.querySelector("#memberTitle")
const memberAge = document.querySelector("#memberAge")
const memberGender = document.querySelector("#memberGender")
const memberAddress = document.querySelector("#memberAddress")


const members = JSON.parse(localStorage.getItem("members")) || [];
const memberships = JSON.parse(localStorage.getItem("memberships")) || [];
render();

// member Add Form ! 
createMemberForm.addEventListener("submit", function (event) {
    event.preventDefault()

    const member = {
        id: members.length,
        fullname: event.target[0].value,
        age: event.target[1].value,
        phoneNumber: event.target[2].value,
        address: event.target[3].value,
        gender: event.target[4].value,
    }

    members.push(member)
    this.reset();
    render()
    localStorage.setItem("members", JSON.stringify(members))
});

// create memberShip ! 

createMembership.addEventListener("submit", function (event) {
    event.preventDefault()
    const membership = {
        id: memberships.length,
        from: event.target[0].value,
        to: event.target[1].value,
        price: event.target[2].value,
        memberId: event.target[3].value,
    }
    memberships.push(membership)
    localStorage.setItem("memberships", JSON.stringify(memberships))
    console.log(memberships);
    this.reset();
})

function render() {
    membersTableBody.innerHTML = "";
    members.forEach((member) => {
        const templete = `
    <tr>
    <th scope="row">${member.id + 1}</th>
        <td>${member.fullname}</td>
        <td>+998${member.phoneNumber}</td>
        <td>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                data-bs-target="#popup" onclick="updateMemberModal(${member.id})">More</button>
    </td>
</tr> 
   `
        membersTableBody.innerHTML += templete;
    })
}


function updateMemberModal(id) {
    const foundMember = members.find((member) => member.id == id)
    title.innerHTML = `${foundMember.fullname}`;
    memberAge.innerHTML = `Age: ${foundMember.age}`;
    memberPhoneNumber.innerHTML = `Phone Number: ${foundMember.phoneNumber}`;
    memberGender.innerHTML = `Gender: ${foundMember.gender}`;
    memberAddress.innerHTML = `Address: ${foundMember.address}`;
    document.querySelector("#memberId").value = id;

    const membershipEl = document.querySelector("#memberships")
    membershipEl.innerHTML = ""

    const userMemberShips = memberships.filter((membership) => membership.memberId == id)

    userMemberShips.forEach((membership) => {
        const templete = `
         <div  class=" border border-bottom  p-2 border-dark  d-flex justify-content-between">
                    <div>
                        <h6>From: ${membership.from}</h6>
                        <h6>To: ${membership.to}</h6>
                    </div>
                    <h6>Price: ${membership.price}</h6>
        </div>
        `
        membershipEl.innerHTML += templete;
    })

}

