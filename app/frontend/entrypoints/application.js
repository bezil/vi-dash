// To see this message, add the following to the `<head>` section in your
// views/layouts/application.html.erb
//
//    <%= vite_client_tag %>
//    <%= vite_javascript_tag 'application' %>
console.log('Vite ⚡️ Rails')


// import trix from 'trix'
// import '@rails/actiontext';

// If using a TypeScript entrypoint file:
//     <%= vite_typescript_tag 'application' %>
//
// If you want to use .jsx or .tsx, add the extension:
//     <%= vite_javascript_tag 'application.jsx' %>

// console.log('Visit the guide for more information: ', 'https://vite-ruby.netlify.app/guide/rails')


// import * as ActionText from '@rails/actiontext'
// Example: Load Rails libraries in Vite.
// import * as Turbo from '@hotwired/turbo'
// Turbo.start()
//
// import ActiveStorage from '@rails/activestorage'
// ActiveStorage.start()

// // Import all channels.
// const channels = import.meta.globEager('./**/*_channel.js')

// Example: Import a stylesheet in app/frontend/index.css
// import '~/index.css'

// We need Vue so we can do all the things
import { createApp } from "vue";
import { components } from './components';

// Function to mount Vue instances
function mountVueComponent(selector, component) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const props = JSON.parse(el.getAttribute('data-props'));
      if (el && props) {
        const app = createApp(component, { ...props });
        app.mount(el);
      }
    });
  }

// Loop through the components array and mount each component
components.forEach(({ selector, component }) => {
    mountVueComponent(selector, component);
});
