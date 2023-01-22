# Vite Watcher Runner

A Vite plugin that runs custom shell commands on file changes.

## Installation

You can install the package via `npm` or `yarn`:

```bash
npm i -D vite-plugin-watch
# or
yarn add -D vite-plugin-watch
```

## Usage

Import the package from `vite.config.js` and configure it.

```js
import { defineConfig } from "vite"
import { watch } from "vite-plugin-watch"

export default defineConfig({
    watch({
      pattern: "app/{Data,Enums}/**/*.php",
      command: "php artisan typescript:transform",
    }),
  ],
})
```

Once a tracked file changes, the plugin will execute a specified command.

The paths of tracked files are configured as [glob patterns](<https://en.wikipedia.org/wiki/Glob_(programming)>):

- Use \* to match anything except slashes and hidden files
- Use \*\* to match zero or more directories
- Use comma separate values between {} to match against a list of options

## Plugin options

| name    | type             | description                                 | default |
| ------- | ---------------- | ------------------------------------------- | ------- |
| pattern | string\|string[] | Tracked files paths                         |         |
| command | string           | A command executed on file change           |         |
| timeout | number           | Timeout between triggering the same command | 500     |
| silent  | boolean          | Hide the output in the console              | false   |
| onInit  | boolean          | Run the command on Vite start               | true    |

## Advanced Inertia

[<img src="https://advanced-inertia.com/og.png" width="420px" />](https://advanced-inertia.com)

Take your Inertia.js skills to the next level with my book [Advanced Inertia](https://advanced-inertia.com/).
Learn advanced concepts and make apps with Laravel and Inertia.js a breeze to build and maintain.

## Momentum

Momentum is a set of packages designed to improve your experience building Inertia-powered apps.

- [Modal](https://github.com/lepikhinb/momentum-modal) — Build dynamic modal dialogs for Inertia apps
- [Preflight](https://github.com/lepikhinb/momentum-preflight) — Realtime backend-driven validation for Inertia apps
- [Paginator](https://github.com/lepikhinb/momentum-paginator) — Headless wrapper around Laravel Pagination
- [Trail](https://github.com/lepikhinb/momentum-trail) — Frontend package to use Laravel routes with Inertia
- [Lock](https://github.com/lepikhinb/momentum-lock) — Frontend package to use Laravel permissions with Inertia
- [Layout](https://github.com/lepikhinb/momentum-layout) — Persistent layouts for Vue 3 apps
- [Vite Plugin Watch](https://github.com/lepikhinb/vite-plugin-watch) — Vite plugin to run shell commands on file changes

## Credits

- [Boris Lepikhin](https://twitter.com/lepikhinb)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
