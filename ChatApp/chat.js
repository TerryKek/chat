function Kuld(){
    var box = document.querySelectorAll('div[class$="chat-messages"]');
    var message = document.getElementById('message')

    box.forEach(function(item) {
    var message_box = document.createElement('div');
    message_box.className = 'message sent';
    message_box.textContent = message.value;
    item.appendChild(message_box);
    message.value = ""
    })


}