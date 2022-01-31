function  icons(){
    if ("color") to ("blue")
    then  ("shouldChangeIcon")
}

if("shouldChangeIcon") {
    // send message to background script
    chrome.runtime.sendMessage({ "app\style\graphics\Other icons\32.png" : folder + icons[2] });
}