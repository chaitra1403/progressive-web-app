self.addEventListener('push',function(event){
console.log('Push Notification Received');

const data = event.data.json();
console.log(data);

const title = data.title;
const options = data.options;

event.waitUntil(self.registration.showNotification(title, options));

});