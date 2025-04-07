importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBxHUyofhi9BR7xq8FzdZNe98YQanCHcow",
  authDomain: "disater-relief-app.firebaseapp.com",
  projectId: "disater-relief-app",
  storageBucket: "disater-relief-app.firebasestorage.app",
  messagingSenderId: "49029062207",
  appId: "1:49029062207:web:c7d73a47f2f80317b9a28a",
  measurementId: "G-JBG2WEQ4LL",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  });
});




