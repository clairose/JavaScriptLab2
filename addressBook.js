
class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
    printDetails() {
        return this.name + this.email + this.phone + this.relation;
    }
}

class AddressBook {
    constructor () {
        this.contacts = [];
        let jimmy = new Contact("jimmy", "jimmy@email.com", "555-5555", "Sketchy friend");
        this.contacts[0]=jimmy;
        let billy = new Contact("Billy", "Billy@gmail.com", "1-800-Billy", "childhood friend");
        this.contacts[1]=billy;
    }
    Add() {
        let name =document.getElementById("nameID").value;
        let email =document.getElementById("emailID").value;
        let phone =document.getElementById("phoneID").value;
        let relation =document.getElementById("relationshipID").value;
        let newFriend = new Contact(name, email, phone, relation);
        this.contacts.push(newFriend);
        let el = document.querySelector("#contacts");

        for(let current in this.contacts) {
            el.innerHTML += "<p id='"+ current+"'>" + this.contacts[current].printDetails() + "</p>";
        }

    }
    deleteAt() {
        let index = prompt("Please enter the index of the contact that you would like to delete.");
        var parent = document.getElementById("contacts");
        var child = document.getElementById(`${index}`);
        parent.removeChild(child);
        //let index = prompt("Please enter the index of the contact that you would like to delete.");
        //this.contacts.splice(index, 1);
    }
    print() {
        for(let contact in this.contacts) {
            console.log(this.contacts[contact]);
        }
    }
    deleteByName() {
        let xname = prompt("Please enter the name of the contact that you would like to delete.");
        let n = this.contacts.indexOf(xname);
        this.contacts.splice(n, 1);
    }

}

let book = new AddressBook();


// while(true) {
//     let input = prompt("Do you wish to (add), delete by index(i), delete by name(n), (print), or (quit)?");
//     if (input === "add") {
//         book.Add();
//     } else if (input === "quit") {
//         console.log("Goodbye!");
//         break;
//     } else if (input === "n") {
//         book.deleteByName();
//     } else if(input === "i") {
//         book.deleteAt();
//     } else if (input === "print") {
//         book.print();
//     } else {
//         console.log("Sorry I didn't understand that!");
//         console.log("Let's try that again.");
//     }
// }
