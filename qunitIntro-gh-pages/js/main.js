import Hst from "./Hst.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(()=>{
    $("#calculate").click((evt)=>{
        evt.preventDefault();
        const nWeight = $("#weight").val();
        const sProv = $("#provinces").val();
        const oCost = new Hst();
        $("#amount").html(oCost.calculate(nWeight, sProv));
    })
});

