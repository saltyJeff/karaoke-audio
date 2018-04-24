var audioFile = document.querySelector('#audioFile');
var audioName = document.querySelector('#audioName');
var audioPlayer = document.querySelector('#audioPlayer');
var audioType = document.querySelector('#audioType');
var audioCanvas = document.querySelector('#audioCanvas');
audioFile.onchange = function (evt) {
    var file = audioFile.files.item(0);
    if (!file) {
        return;
    }
    audioName.textContent = file.name;
    var reader = new FileReader();
    reader.onload = function (e) {
        console.log(e);
        audioPlayer.src = e.target.result;
        audioPlayer.play();
    };
    reader.readAsDataURL(file);
};
//# sourceMappingURL=main.js.map