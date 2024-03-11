AFRAME.registerComponent("createButtons",{
    init:function(){
        var button_1 = document.createElement("button")
        button_1.innerHTML="RATE US"
        button_1.setAttribute("id","rating-button")
        button_1.setAttribute("class","btn btn-warning")
        var button_2 = document.createElement("button")
        button_2.innerHTML="ORDER NOW"
        button_2.setAttribute("id","order-button")
        button_2.setAttribute("class","btn btn-warning")
        var div_button = document.getElementById("buttons")
        div_button.appendChild(button_1)
        div_button.appendChild(button_2)

    }
})