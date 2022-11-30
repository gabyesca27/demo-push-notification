import addNotification from 'react-push-notification';
import { Notifications } from 'react-push-notification';
function App() {
/*function buttonOnClick (){
	addNotification({
	title: 'Warning',
	native:true		
	})
};*/

function notifyMe() {
  // Comprobamos si el navegador soporta las notificaciones
  if (!("Notification" in window)) {
    alert("Este navegador no es compatible con las notificaciones de escritorio");
  }

  // Comprobamos si los permisos han sido concedidos anteriormente
  else if (Notification.permission === "granted") {
    // Si es correcto, lanzamos una notificación
    var notification = new Notification("¡Hola!");
  }

  // Si no, pedimos permiso para la notificación
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // Si el usuario nos lo concede, creamos la notificación
      if (permission === "granted") {
        var notification = new Notification("¡Hola!");
      }
    });
  }

  // Por último, si el usuario ha denegado el permiso,
  // y quiere ser respetuoso, no hay necesidad de molestarlo.
}

return (
	<div className="App">
	<Notifications />
  <button onClick={notifyMe()}>¡Notifícame!</button>
  </div>
);
}

export default App;

