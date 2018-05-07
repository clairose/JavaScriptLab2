
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
        let el = document.querySelector("#contacts");
        var para = document.createElement("p");
        para.setAttribute = ("id", "newtext");
        para.innerHTML += newFriend.printDetails() + `<button onlcick=${book.deleteAt()}></button>`;
        el.appendChild(para);
    }
    deleteAt() {
        var del = document.getElementById("newtext");
        var par = document.getElementById("contacts")
        del.parentNode.removeChild(del);
        }
    }

}

let book = new AddressBook();

