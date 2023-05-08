import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
export default component$(() => {
  return (
    <nav class='navbar navbar-expand-lg bg-body-tertiary navbar-dark' style="background-color: #37D5AB">
      <div class='container-fluid'>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarTogglerDemo01'>
          <a class='navbar-brand' href='#'>
            <QwikLogo height={40} width={100} />
          </a>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <a
                class='nav-link active'
                aria-current='page'
                href='https://qwik.builder.io/docs/components/overview/'
                target='_blank'
              >
                Docs
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link'
                href='https://qwik.builder.io/examples/introduction/hello-world/'
                target='_blank'
              >
                Examples
              </a>
            </li>
            <li class='nav-item'>
              <a
                class='nav-link'
                href='https://qwik.builder.io/tutorial/welcome/overview/'
                target='_blank'
              >
                Tutorial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});
