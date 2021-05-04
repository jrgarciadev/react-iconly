# React Iconly Contributing Guide

Hello!, I am very excited that you are interested in contributing with React Iconly 🎉👍. However, before submitting your contribution, be sure to take a moment and read the following guidelines.

- [Code of Conduct](https://github.com/jrgarciadev/react-iconly/blob/main/CODE_OF_CONDUCT.md)
- [Extraction request guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Pull Request Guidelines

> **Note:** At the moment we are not accepting pull requests containing _**icons**_.

Pull requests for new features, bug fixes, etc. are often appreciated.

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

- The `main` branch is basically a snapshot of the latest stable version. All development must be done in dedicated branches.
- It is good to have multiple small commits while working on the PR. We'll let GitHub squash it automatically before the merge.
- If you add a new feature:
  - Add the test case that accompanies it.
  - Provide a compelling reason to add this feature. Ideally, I would first open a suggestion topic and green it before working on it.
- If you correct an error:
  - If you are solving a special problem, add (fix #xxxx [, # xxx]) (# xxxx is the problem identification) in your PR title for a better launch record, for example update entities encoding / decoding (fix # 3899).
  - Provide a detailed description of the error in the PR. Favorite live demo.
  - Add the appropriate test coverage, if applicable.

## Icon Requests

Before creating an icon request, please search to see if someone has requested the icon already. If there is an open request, please add a :+1:.

If the icon has not already been requested, [create an issue](https://github.com/jrgarciadev/react-iconly/issues/new?title=Icon%20Request:) with a title of `Icon request: <icon name>` and add as much information as possible.

## Development Setup

After cloning the repository, execute:

    yarn

or

    npm install

Then, execute:

    yarn start

This will start build in `watch` mode.

To test your changes you can run the `example` project:

    cd example && yarn start

    or

    cd example && npm run start

The `example` project is linked to `react-iconly` library so that if you make any changes in `react-iconly/src` you will see automatically.

If you want to make changes in react iconly website, follow these steps:

cd website && yarn start

IMPORTANT: React Iconly website just have npm version of `react-iconly` so that the changes realated to `react-iconly` library must be published before.
