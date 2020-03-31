# Contributing Guide

You want to contribute to Prisma-multi-tenant? Awesome! 😎

Here are the steps to contribute:

1. [Finding an issue to work on](#1-finding-an-issue-to-work-on)
2. [Cloning and installing Prisma-multi-tenant](#2-cloning-and-installing-prisma-multi-tenant)
3. [Linking Prisma-multi-tenant](#3-linking-prisma-multi-tenant)
4. [Creating the Pull Request](#4-creating-the-pull-request)

## 1. Finding an issue to work on

Building Open Source projects is a collaborative process. Features and bug requests are discussed with maintainers and users to find the best solution to the problems at hand.

If you want to work on [an already existing issue](https://github.com/Errorname/prisma-multi-tenant/issues), **add a comment saying you are working on it**. Otherwise, there may be multiple people working on the same issue.

If you want to work on something else, please **create an issue explaining what you want to do**. People will then be able to give you some ideas or context to help you.

> Note: Want to contribute but don't know where to start? Send me a message on [Prisma's Slack](https://slack.prisma.io/) (@Errorname)!

## 2. Cloning and installing Prisma-multi-tenant

Once you have an issue, you can clone and install Prisma-multi-tenant:

```sh
git clone https://github.com/Errorname/prisma-multi-tenant.git

cd prisma-multi-tenant

npm install
```

## 3. Running and linking Prisma-multi-tenant

Prisma-multi-tenant is written in Typescript. You will need to build it with the following command:

```sh
npm run build -- -w
```

Prisma-multi-tenant is a CLI. When running in your console, you will want the command to execute your own builded version of `prisma-multi-tenant`. To do that, you will need to "link" it:

```sh
# In the Prisma-multi-tenant repository
npm link
```

Prisma-multi-tenant is also a library. When using it in a project, you will also want to execute your own builded version of `prisma-multi-tenant`. To do that, go into your project's directory and "link" it:

```sh
# In your project's directory
npm link prisma-multi-tenant
```

You can now work on your issue! 🥳

## 4. Creating the Pull Request

Your contribution is working beyond expectation? Great, let's add it to the project!

First, make sure your code is correctly formatted:

```sh
npm run lint
```

Then, make sure you don't introduce regressions:

```sh
npm run test
```

Everything's green? Perfect!

> Note: If you are contributing on some documention, please use the [Prisma's documentation style guide](https://www.prisma.io/more/style-guide)

You can now [create a Pull Request](https://github.com/Errorname/prisma-multi-tenant/compare), link to the issue, and explain what your contribution does.

Thank you for taking the time to improve this project 🙂
