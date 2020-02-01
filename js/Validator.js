class Validator {
    email = ({value}) => /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(value);
    business = ({value}) => /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/.test(value);
    phone = ({value}) => /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(value);
    number = ({value}) => /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/.test(value);
    image = ({files}) => {
        if(!file || !file[0]) result &= error(movie_poster, "올바른 형태의 이미지 파일이 아닙니다."); // 이미지가 업로드 되지 않았을 경우
        else {
            file = file[0];

            let img = await(function(){
                return new Promise(res => {
                    // 이미지가 로딩에 성공하면 올바른 이미지라고 판단
                    let img = document.createElement("img");
                    img.src = URL.createObjectURL(file);

                    img.onload = () => res(img);
                    img.onerror = () => res(false);
                });
            })();

            result &= img ? error(movie_poster, "") : error(movie_poster, " 올바른 형태의 이미지 파일이 아닙니다.");
        }
    };

    constructor(form, ...inputList){
        this.$form = typeof form === "string" ? document.querySelector(form) : form;
        this.inputList = inputList.map(x => typeof x === "string" ? document.querySelector(x) : x);

        this.formEvent();
    }

    formEvent(){

    }
}