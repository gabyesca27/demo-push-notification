
import { useEffect } from "react";
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
      alert(
        "Este navegador no es compatible con las notificaciones de escritorio"
      );
    }

    // Comprobamos si los permisos han sido concedidos anteriormente
    else if (Notification.permission === "granted") {
      //    Si es correcto, lanzamos una notificación
      new Notification("¡Hola!");
    }

    // Si no, pedimos permiso para la notificación
    else if (Notification.permission !== "denied") {
      console.log("Entro en este if");
      Notification.requestPermission().then(function (permission) {
        // Si el usuario nos lo concede, creamos la notificación
        if (permission === "granted") {
          new Notification("¡Hola!");
        }
      });
    }

    // Por último, si el usuario ha denegado el permiso,
    // y quiere ser respetuoso, no hay necesidad de molestarlo.
  }
  useEffect(() => {
    notifyMe();
  }, []);

  return (
    <div className="App">
      <button onClick={() => notifyMe()}>¡Notifícame!</button>
    </div>
  );
}

export default App;
