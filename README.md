# Workshop: Make React reactive - how to be mutable in an immutable world

This is a clickbait title - React "is not" theoretically reactive, yes, but you shouldn't really care like the creator of SolidJS explains it here [How React isn't reactive, and why you shouldn't care](https://dev.to/this-is-learning/how-react-isn-t-reactive-and-why-you-shouldn-t-care-152m). But , in a way, we can use something like MobX to at least try to be a little bit more reactive than the default behavior of our beloved React.

In this workshop we'll also discuss how to update our state in a more "mutable" way with the help of JS, lodash, emmer and of course - MobX. 

Here are further readings and resourcess:

- [The gist of MobX](https://mobx.js.org/the-gist-of-mobx.html)
- [MobX with React functional components setup — better than Redux?](https://tengweiherr.medium.com/mobx-with-react-functional-components-better-than-redux-3f36d1909950#c421)
- [MobX in React Tutorial - the basics](https://www.youtube.com/watch?v=yZ0aw_LSQck)
- [MobX Tutorial with React and Typescript](https://www.youtube.com/watch?v=ElgfQdq-Htk)
- [When does MobX react?](https://mobx.netlify.app/guides/when-does-mobx-react)


## Files

The initial state of the app is under `src/components`. Under `src/examples` are the "live" changes from the workshop.


## Scripts

- Install dependencies `npm install`
- Start application `npm run dev`

## About this project - React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
