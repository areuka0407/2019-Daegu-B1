window.addEventListener("load", function(){
    this.toast = function(message){
        let $box = document.createElement("div");
        $box.classList.add("toast-message");
        $box.innerText = message;

        this.document.body.append($box);
    }
});