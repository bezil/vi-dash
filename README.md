# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version - 3.3.3

```
eval "$(rbenv init -)"
ruby -v

chmod +x start-ruby.sh
run ./start-ruby.sh
```

* System dependencies
```
bundle add vite_rails
bundle exec vite install
npm i vite-plugin-full-reload @vitejs/plugin-vue

rails s
bin/vite dev
```

* Configuration

## Configure Tailwind
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

```
module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/frontend/**/*.{js,jsx,ts,tsx,svelte,vue}',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
```

Add the following lines to app/frontend/entrypoints/application.css:

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

Also Don’t forget to include the vite_stylesheet_tag in the app/views/layouts/application.html.erb file:

## Configure Hot Reload
```
import FullReload from 'vite-plugin-full-reload'
import vue from "@vitejs/plugin-vue"

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"], { delay: 200 }),
    vue(),
  ],
})
```
* Database creation
Postgres
change postgres username and password in db config

psql -U <username>
database name: vi_dash_development

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
