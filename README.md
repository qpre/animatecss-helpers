# animatecss-helpers

javascript helper functions to apply [animate.css](https://animate.style) classes

## Install

`yarn add animatecss-helpers animate.css`

## Usage

```javascript
import 'animate.css';
import { fade_in } from 'animatecss-helpers';

function animate_something(nodes) {
  fade_in({ nodes });
}
```

## Parameters

| name     | type               | default | description                                                                              |
| -------- | ------------------ | ------- | ---------------------------------------------------------------------------------------- |
| nodes    | Array<HTMLElement> | []      | an array of nodes you want to applly animations to                                       |
| delay    | number             | 0       | time to wait before the animation starts in seconds                                      |
| duration | number             | 1       | time of animation in seconds                                                             |
| stagger  | number             | 0       | when applying style on multiple nodes: time to wait to apply animation in beetween nodes |
