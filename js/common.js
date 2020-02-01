window.addEventListener("load", function(){
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
});