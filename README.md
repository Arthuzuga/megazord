# Megazord

## Table of contents

- [Introduction](#introduction)
- [Supported libraries](#supported-libraries)
- [Adding Megazord on your project](#adding-megazord-on-your-project)
- [Visualizing Megazord](#visualizing-megazord)
- [Using Megazord](#using-megazord)
- [Contributing](#contributing)

## Introduction

### Atomic Design
Megazord is a repository based on **Atomic Design** architecture. So our design and developer's teams can use all of this style, typograph and components to build our product interface as a *building blocks* system.

The folder structure is:
* Style Guide (Coming soon)
  - Accessibility
  - Colors
  - Elements Rules
  - Grid Definitions
  - Icons
  - Typograph
  - Voice and Ton

* Components (Coming soon)
    - Atoms
    - Molecules
    - Organisms 

* Pattern Library (Coming soon)
  - Atoms
  - Molecules
  - Organisms

* Resources (Coming Soon)
  - Github Repos
  - Design resources
  - Tools (CodePen, Adobe XD)
  - Reading (Blog posts)

#### Style Guide

In Style Guides folder you going to find informations about how to apply ours Colors, Icons, Typograph in your application, as well as, how to position the elements on the grid and how to apply features on the elements (primary, disabled, selected, etc...)

#### Components

In Components folder you going to find the codebase for Megazord's components with their storybook's  stories separated on Atomic Design architecture (Atoms, Molecules and Organisms).

#### Pattern Library

In Pattern Library folder you going to find all recommendations of how to apply Megazord's components in your project.

#### Resources

In Resources folder you going to find a collection of links to the Blog posts, other Github repositories, design tokens resources and codepen examples.

## Supported libraries
Nowadays, Megazord supports Reactjs as components library only.

## Adding Megazord on your project
(Coming Soon...)

## Visualizing Megazord

In order to see the components library and the style guide instructions, you can run the commands:

- `yarn run storybook`

after the server started, we can consult all informations about positions, colors, typograph or component's code examples on `localhost:6006`

## Using Megazord

Here's a quick example that show how to apply a Button on your project:

1. Complete all install steps listed above;
2. Import Megazord in your project 
  ```javascript
    import { Button } from '@megazord/components' // With ES6 modules
  ```
3. Access the Storybook page to follow the guidelines of usage
4. Replicate the instructions in your file and make sure that you using the style's modes correctly.

### Customizing styles
(Coming Soon...)


## Contributing
(Coming Soon...)