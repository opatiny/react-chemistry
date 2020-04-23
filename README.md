# `react-mol-structures`
Created using `react-create-app`.

Responsive web app that returns possible structures isomers for an organic molecule.

## [Use the app](https://opatiny.github.io/react-mol-structures/)

## Dependencies

- `react-mf`: To have formatted molecular formula
- `react-ocl`: To draw molecular structures from `idCode`
- `openchemlib`: Dependency of `react-ocl` which has to be installed by hand
- `react-router-dom`: Clickable links between pages

## Building the project with relative paths

For the project build to work when it is launched from Live Server, you have to add this line at the first level of `package.json`:

```json
  "homepage": "./",
```

## GitHub workflows

We use github workflows to publish the app on github pages.
