## Intro

- This project lightly follows [Component-Driven Development](https://www.chromatic.com/blog/component-driven-development/)

## Standards

- To ensure syntax standards && avoid some boilerplates, custom [hygen templates](https://www.hygen.io/docs/templates/) are used to generate new components, optional storybook stories && index exports.

## Walk-Through

#### New Component

- To create a new component with storybook setup:

```Bash

yarn new:component

# type in component's name, e.g. PrimaryButton, at the prompt

```
- All needed files & exports will be generated and you can start building

#### New SVG Icon Component:

- To create a new svg icon component:

```Bash

yarn new:icon

# type in icon's name, e.g. Home, at the prompt

# No need to add "Icon". It will automatically be added

```

- All needed files & exports will be generated.

- Next, paste the content of your svg file into this [svg-component-generator](https://react-svgr.com/playground/?native=true)
- Copy the return block + the imports into the newly created Icon file (e.g. HomeIcon/index.js)
- Refer to existing icon components for reference
