const imagemin = require("imagemin");
const webp = require("imagemin-webp");

//source 폴더의 png 파일들을 변환해서 images 폴더로 넣겠다.
//만약 images 폴더가 존재하지 않는 다면 생성됨
imagemin(["sources/*.png"], "images", {
    use: [
        webp({
            quality: 75 //변환되는 webp의 퀄리티를 지정. 손실 있음. 75%.
        })
    ]
}).then(function() {
    console.log("Images converted!"); //완료되었을때 로그
});