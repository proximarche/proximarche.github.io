self.addEventListener("push",e=>{let d={};try{d=e.data.json()}catch(x){}
e.waitUntil(self.registration.showNotification(d.title||"ProxiMarché",{body:d.body||"",data:{url:d.url||"./"}}))});
self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.openWindow(e.notification.data.url))});
