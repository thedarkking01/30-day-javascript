let name={
    firstname: "Sourabh",
    lastname: "Singh"
}

let printfullname=function(hometown,state){
    console.log(this.firstname+" "+this.lastname+'from '+hometown+' to '+state);
    }

let name2={
    firstname: "John",
    lastname: "Doe"
}

// function borrowing
printfullname.call(name2, "New York", "NY");
printfullname.apply(name2,["jodhpur","Rajasthan"])

// bind method
let printmyname=printfullname.bind(name,"mumbai","Maharashtra");
console.log(printmyname);
printmyname();
