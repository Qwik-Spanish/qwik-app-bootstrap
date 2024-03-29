import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div role='presentation' class='ellipsis'></div>
      <div role='presentation' class='ellipsis ellipsis-purple'></div>

      <div class='container container-center container-spacing-xl'>
        <h3>
          Empieza a trabajar <span class='highlight'>desde aquí</span>
          <br />
        </h3>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
