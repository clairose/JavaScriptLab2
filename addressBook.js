
class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
    printDetails() {
        return this.name + " " + this.email + " " + this.phone + " " + this.relation;
    }

}

class AddressBook {
    constructor () {
        this.contacts = [];
    }
    add() {
        let name =document.getElementById("nameID").value;
        let email =document.getElementById("emailID").value;
        let phone =document.getElementById("phoneID").value;
        let relation =document.getElementById("relationshipID").value;
        let newFriend = new Contact(name, email, phone, relation);
        this.contacts.push(newFriend);
        var i = this.contacts.indexOf(newFriend)
        let el = document.getElementById("contacts");
        let para = document.createElement("p");
        para.id = `${i}`;
        para.innerHTML += newFriend.printDetails() + `<button onclick='book.deleteAt(${i})'>Delete</button>`;
        el.appendChild(para);
    }
    deleteAt(i) {
        let del = document.getElementById(`${i}`);
        console.log(del);
        let par = document.getElementById("contacts");
        par.removeChild(del);
        }
    }



let book = new AddressBook();

