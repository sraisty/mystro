# Mystro Take Home

Below you will find the requirements for your take home challenge. It is meant to test your ability
to architect, implement, and refine a "full" React feature.

### Requirements

1. Add a new page to the website.
2. On this page add a map that allows the user to draw a "zone" (polygon).
3. The user should _save_ the zone once they are finished (save to Redux).
4. The user should have the option to _reset_ the zone.
5. If the user navigates away from the page, then back, the current zone should be displayed on the
   map.
6. _Time Permitting:_ The user should be able to draw "excluded zones" on top of the existing zone(s).

### Code Quality

Your code should adhere to the ESLint, Prettier, and TypeScript rules in place in the project. Feel
free to use your code editor's plugins for this, but the code should pass the included `npm run check`
script.

### UX/Styling

This not a test of your UI/UX design abilities. There is no mock for this and the "theme" of this
project is very sparse, so feel free to make your UI equally sparse. Focus on it's functionality,
ease-of-use, and robustness.

That being said, you should use the included [CSS-in-JS library](https://emotion.sh/docs/object-styles)
to style anything you add to the project. Ideally using the JS object syntax (linked above), to
simulate a scenario a closer to ReactNative.

### NPM

Install dependencies with `npm install`.

Scripts:

- `npm run dev`: Start the dev server
- `npm run check`: Check the code with ESLint, Prettier, and TypeScript

## Vike README

- [React](#react)

  - [`/pages/+config.ts`](#pagesconfigts)
  - [Routing](#routing)
  - [`/pages/_error/+Page.jsx`](#pages_errorpagejsx)
  - [`/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`](#pagesonpagetransitionstartts-and-pagesonpagetransitionendts)
  - [SSR](#ssr)
  - [HTML Streaming](#html-streaming)

### React

This app is ready to start. It's powered by [Vike](https://vike.dev) and [React](https://react.dev/learn).

### `/pages/+config.ts`

Such `+` files are [the interface](https://vike.dev/config) between Vike and your code. It defines:

- A default [`<Layout>` component](https://vike.dev/Layout) (that wraps your [`<Page>` components](https://vike.dev/Page)).
- A default [`title`](https://vike.dev/title).
- Global [`<head>` tags](https://vike.dev/head-tags).

### Routing

[Vike's built-in router](https://vike.dev/routing) lets you choose between:

- [Filesystem Routing](https://vike.dev/filesystem-routing) (the URL of a page is determined based
  on where its `+Page.jsx` file is located on the filesystem)
- [Route Strings](https://vike.dev/route-string)
- [Route Functions](https://vike.dev/route-function)

### `/pages/_error/+Page.jsx`

The [error page](https://vike.dev/error-page) which is rendered when errors occur.

### `/pages/+onPageTransitionStart.ts` and `/pages/+onPageTransitionEnd.ts`

The [`onPageTransitionStart()` hook](https://vike.dev/onPageTransitionStart), together with
[`onPageTransitionEnd()`](https://vike.dev/onPageTransitionEnd), enables you to implement page
transition animations.

### SSR

SSR is enabled by default. You can [disable it](https://vike.dev/ssr) for all your pages or only for
some pages.
