import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { QwikCityProvider, RouterOutlet, ServiceWorkerRegister } from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap'; // <== Esto es lo que debemos de añadir, pero aquí da error!

export default component$(() => {
  /**
   * Aquí añadimos la función que pertenece al ciclo de vida para decir
   * que el navegador y sus elementos están disponibles
   */

  useVisibleTask$(async () => {
    // Hasta que no esté el navegador no intentará cargarlo
    await import('bootstrap');

    // En este punto, como document está listo, podemos trabajar con el DOM
    // por ejemplo entre otras cosas que ya sería en el cliente 
  })

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
