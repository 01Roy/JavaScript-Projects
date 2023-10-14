let btn = document.getElementById("btn");
const CalulateTip = ()=>{
    let Bill = document.getElementById("BillAmount").value;
    let tipPer = document.getElementById("TipPer").value;
    // alert(tip)
    let TipAmount =Number(Bill) * Number(tipPer/100);
    let totalBill = Number(Bill) + Number(TipAmount);

    document.getElementById("TipAmount").value = TipAmount;
    document.getElementById("TotalAmount").value = totalBill;
}

btn.addEventListener("click",()=>{
    CalulateTip();
})
