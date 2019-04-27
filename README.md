# React Native TS Template

This project is a template using React Native and Typescript.

## Using it

```
npx react-native init YourProjectName --template mard-rn-ts

cd YourProjectName

node first-setup
```

## Configuring

Insert this scripts at your `package.json`:

```json
    "start": "node node_modules/react-native/local-cli/cli.js start",
    "test": "jest",
    "android": "react-native run-android",
    "android:apk": "cd android && ./gradlew assembleRelease",
    "android:install": "adb install android/app/build/outputs/apk/app-release.apk",
    "clear": "node node_modules/react-native/local-cli/cli.js start --reset-cache",
    "devtools": "react-devtools",
    "ios": "react-native run-ios",
    "lint": "tslint --project tsconfig.json",
    "lint:staged": "lint-staged",
    "postversion": "react-native-version",
    "bump:stable-release": "NEXT_STABLE=\"$(semver $npm_package_version -i release)\"; npm version $NEXT_STABLE",
    "bump:stable-major": "NEXT_STABLE=\"$(semver $npm_package_version -i major)\"; npm version $NEXT_STABLE",
    "bump:stable-minor": "NEXT_STABLE=\"$(semver $npm_package_version -i minor)\"; npm version $NEXT_STABLE",
    "bump:stable-patch": "NEXT_STABLE=\"$(semver $npm_package_version -i patch)\"; npm version $NEXT_STABLE",
    "bump:beta-release": "NEXT_BETA=\"$(semver $npm_package_version -i prerelease --preid beta)\"; npm version $NEXT_BETA",
    "bump:beta-major": "NEXT_BETA=\"$(semver $npm_package_version -i premajor --preid beta)\"; npm version $NEXT_BETA",
    "bump:beta-minor": "NEXT_BETA=\"$(semver $npm_package_version -i preminor --preid beta)\"; npm version $NEXT_BETA",
    "bump:beta-patch": "NEXT_BETA=\"$(semver $npm_package_version -i prepatch --preid beta)\"; npm version $NEXT_BETA"
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
