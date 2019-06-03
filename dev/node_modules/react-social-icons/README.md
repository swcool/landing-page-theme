# react-social-icons

A set of beautiful svg social icons.  Easily used in React.  No images or external css dependencies.  Svg paths provided by Squarespace.

![social network icons](http://i.imgur.com/RoIt9OD.png)

## Install

```
npm install react-social-icons --save-dev
```

## Usage

Pass in the `url` prop of your social network, and the icon will be rendered.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
ReactDOM.render(<SocialIcon url="http://twitter.com/jaketrent" />, document.body);
```

See more [usage options on the example site](http://jaketrent.github.io/react-social-icons/).

## Rebuild Examples

```
git checkout gh-pages
git rebase master
sh scripts/gen-gh-pages.sh
```
