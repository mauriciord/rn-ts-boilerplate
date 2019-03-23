# React Native TS Template

This project is a template using React Native and Typescript.

## Using it

```
npx react-native init YourProjectName --template mard-rn-ts

cd YourProjectName

node first-setup
```

## Git hooks

The project is using Husky to add some **Git hooks**.

### Husky commit msgs

It's very simple to use, see:

```
git commit -m "prefix: your beautiful message here"
```

The **prefixes** are:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

### Before commit

As a `pre-commit`, it's using a `lint:staged` (lint-staged), that format code using prettier.
