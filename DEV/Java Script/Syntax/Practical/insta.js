document.querySelector(".sqdOP.L3NKy.y3zKF").click()
items[4].querySelector('button').click()

var items = document.querySelectorAll(".follow, .js-follow, .btn, .btn-primary");
for (var i = 0; i < items.length; i++) {
    if (items[i].getAttribute("data-following") === "0") {
        items[i].click();
    }
}
for(var i=30;i<items.length;i++){
items[i].querySelector('button').click()
}

for(var i=0;i<items.length;i++){
    if(items[i].querySelector('button').innerText()=="Follow"){
    items[i].querySelector('button').click()
    }
    }

