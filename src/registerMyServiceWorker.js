export default function registerMyServiceWorker() {
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
        .then(reg => console.log("Registered successfully ", reg.scope))
        .catch(e => console.log("Error ", e));
    }
}