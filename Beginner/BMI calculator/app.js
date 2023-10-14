
const bmi =()=>{
      var height =(document.getElementById("height").value);
      var weight =(document.getElementById("weight").value);
      var bmi = weight/(height/100*height/100);
      var total = bmi.toFixed(2);
      document.getElementById("bmi_index").innerHTML= total;
}

