/* TASK-1 compare two JSON having same properties wihout order
    Given code: a. let obj1 = {name: "person1" , age: 5};
                b.  let obj1 = {age: 5 , name: "person1"};age: 5 , name: "person1"
*/
let obj1 = { 
    name: "person1",
     age: 5
    };
let obj2 = {
    age: 5,
    name: "person1"
    };
    let flag=true;
    if(Object.keys(obj1).length==Object.keys(obj2).length){
        for(key in obj1) { 
            if(obj1[key] === obj2[key]) {
                continue;
            }
            else {
                flag=false;
                break;
            }
        }
    }
    else {
        flag=false;
    }
    console.log(`the object is equal: ${flag}`);


    /* TASK-2 use the rest countries API's URL-> http://restcountries.com/v3.1/all 
and display all the country flags in the console */

//create an object to the XMLHttpRequest class constructor
let xhr = new XMLHttpRequest();

//open a new connection the server
xhr.open('GET' , 'https://restcountries.com/v3.1/all');

xhr.send();     //this will send request to the server

// the load event handles the response from the server
xhr.onload = function(){
     let countries = JSON.parse(xhr.responseText);
    for ( let flags of countries ){
        console.log(flags.flag);
    }
}


/* TASK-3 use the rest countries API's URL-> http://restcountries.com/v3.1/all 
and display all countries name , region , subregion and population */

//create an object to the XMLHttpRequest class constructor
let xhr1 = new XMLHttpRequest();

//open a new connection the server
xhr1.open('GET' , 'https://restcountries.com/v3.1/all');

xhr1.send();     //this will send request to the server

// the load event handles the response from the server
xhr1.onload = function(){
    let countries1 = JSON.parse(xhr1.responseText);
    for ( let info of countries1 ){
        console.log('Country Name:'+' '+info.name.common+ ',', 'Region:'+' '+info.region + ',','SubRegion:'+' '+info.subregion + ',', 'Population:'+' '+info.population);
    }
}