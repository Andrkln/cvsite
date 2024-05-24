let a = '{"message": " with", "id": "chatcmpl-9SLTu6BKEsYuO8C65PRz2EC95EMzI"} {"message": " him", "id": "chatcmpl-9SLTu6BKEsYuO8C65PRz2EC95EMzI"}'

let b = a.split('{').slice(1);

if (b.length >= 2) {
    for (i in b) {
        console.log('{' + b[i])
    }
}