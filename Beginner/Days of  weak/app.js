let day = document.getElementById("day");
let dnT = document.getElementById("dateTime");

let date = new Date();
let Currentday = date.getDay();
let CurrentDateTime = date.toLocaleString();

switch (Currentday) {
    case 0:
        Currentday = "Sunday";    
        break;
    case 1:
        Currentday = "Monday";    
        break;
    case 2:
        Currentday = "Tuesday";    
        break;
    case 3:
        Currentday = "Wednesday";    
        break;
    case 4:
        Currentday = "Thrusday";    
        break;
    case 5:
        Currentday = "Friday";    
        break;

}
  
    day.innerHTML= Currentday;
    dnT.innerHTML = CurrentDateTime;




