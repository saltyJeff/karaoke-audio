const audioFile: HTMLInputElement = document.querySelector('#audioFile')
const audioName: HTMLSpanElement = document.querySelector('#audioName')
const audioPlayer: HTMLAudioElement = document.querySelector('#audioPlayer')
const audioType: HTMLSelectElement = document.querySelector('#audioType')
const audioCanvas: HTMLCanvasElement = document.querySelector('#audioCanvas')

audioFile.onchange = (evt) => {
    const file = audioFile.files.item(0);
    if(!file) {
        return;
    }
    audioName.textContent = file.name
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent) => {
        console.log(e);
        audioPlayer.src = (e.target as any).result
        audioPlayer.play()
    }
    reader.readAsDataURL(file)
}