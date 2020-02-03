/**
 * 질의자
 */

const $ = (s) => document.querySelector(s);


/**
 * 토스트 메세지
 */
let $box = null;
this.toast = function(message){
    if($box){
        this.clearTimeout(this.animateQueue);
        $box.style.transition = "0.5s";
        $box.style.bottom = "80px";
        $box.style.opacity = "0";

        let temp = $box;
        this.setTimeout(() => {
            temp.remove();
            temp = null;
        }, 500);
    }

    $box = document.createElement("div");
    $box.classList.add("toast-message");
    $box.innerText = message;

    this.document.body.append($box);
    this.setTimeout(() => {
        $box.style.bottom = "100px";
        $box.style.opacity = "1";
        this.animateQueue = this.setTimeout(() => {
            $box.style.transition = "0.5s";
            $box.style.bottom = "80px";
            $box.style.opacity = "0";
            this.animateQueue = this.setTimeout(() => {
                $box.remove();
                $box = null;
            }, 500);
        }, 1000);
    });
}

/**
 * 에러 메세지 출력
 */

function error(target = null , message = null){
    if(target){
        let $output = target;
        if(target.nodeName === "INPUT"){
            $output = target.previousElementSibling;
            $output = !$output || !$output.classList.contains("help-message") ? target.parentElement.previousElementSibling : $output;
        }
        
        $output.innerText = message;
    }
    return !message;
}


window.addEventListener("load", () => {
    let fileInput;
    if(fileInput = document.querySelector(".custom-file-input"))
        fileInput.addEventListener("change", e => {
            if(e.target.files.length > 0){
                let parent = e.target.parentElement;
                let label = parent.querySelector(".custom-file-label");
                label.innerText = e.target.files[0].name;
            }
        }); 
});