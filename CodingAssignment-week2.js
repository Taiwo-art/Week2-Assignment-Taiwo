//Assignment 1----//

let students = [
    {
        name: "Dumebi",
        age: 21
    },

    {
        name: "Lambo",
        age: 25
    },

    {
        name: "Priscilla",
        age: 18
    },

    {
        name: "Jackson",
        age: 17
    },
     
    {
        name: "Lanre",
        age: 16
    },

    {
        name: "Michael",
        age: 23
    },

    {
        name: "Lekan",
        age: 33
    },

    {
        name: "Tunde",
        age: 53
    },

    {
        name: "Bayo",
        age: 40
    },

    {
        name: "Babajide",
        age: 20
    },

    {
        name: "Jemimmah",
        age: 19
    },

    {
        name: "Lolade",
        age: 28
    },

    {
        name: "Shodipo",
        age: 56
    },

     ]
     const ageSorting = () => {

        let sortAge = students.length
        for (let i = 0; i<sortAge; i++){
                let ageFilter = students[i].age;
                if (ageFilter<20)
                console.log(students[i])
          
        }
     }
     ageSorting()  
     

//Assignment 2---//

let newArray = {name : "RajiniKanth", age : 25, hasPets : true};


const printAllKeys = () => {

    console.log(Object.keys(newArray))

}
printAllKeys()