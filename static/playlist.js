window.onload = init;
function init (){
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;
}


function handleButtonClick (){
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    alert("Thanks for the rec!")

    save(songName);
}

