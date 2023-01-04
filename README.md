## Folder structure

## component

The individual UI components that make up the app will live in here

## lib

Business/app/domain logic will live in here.

## pages

Will be the actual routes/pages as per the required Next.js structure.

# Api

This call will be going serverless to the local project, and then to the API Gateway.

## pages/api

Request to API Gateway will be handled here.

## public

Static assets will live in here.

# Configuration

This folder is to handle the configuration of the axios client, the environment variables, requests, etc.

# Hooks

This folder is to handle the custom hooks. Hooks are functions that let you “hook into” React state and lifecycle features from function components. The mayory of the hooks are going to be related to api calls with react-query.

# Interfaces

This folder is to handle the interfaces. The interfaces are going to be used in the components, hooks, etc.

## Husky

Husky is a git hook manager. It will run the pre-commit hook to run the linter and prettier before committing.

We going to use the following hooks:

'build',
'packages',
'update',
'chore',
'ci',
'docs',
'feat',
'fix',
'perf',
'refactor',
'revert',
'style',
'test',
'translation',
'security',
'changeset',

Example:

git commit -m "feat: add new feature"

Commits needs to be specific, dont use "update" or "fix" without specifying what was updated or fixed. Recommend dont use update or chore, use feat or fix instead.

## Prettier && Lint

Prettier is a code formatter. It will format the code to a standard format.
Lint is a code linter. It will check the code for errors and inconsistencies.

## Commitizen

Commitizen is a tool that will help us to create a commit message with a specific format.

# How to run

## Development

The project is using Next.js with yarn workspaces. To run the project in development mode, you need to run the following commands:
yarn install
yarn dev

## Production

To run the project in production mode, you need to run the following commands:
yarn install
yarn build
yarn start
