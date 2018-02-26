# React Anchor Link Smooth Scroll History

React component for anchor links using the [smoothscroll](https://github.com/iamdustan/smoothscroll) polyfill and [history](https://github.com/ReactTraining/history).

This is just a clone of [react-anchor-link-smooth-scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll), including the [history](https://github.com/ReactTraining/history) library to push the `href`, or `data-href` attribute value to
the browser history.

## Instructions

1. Install dependency: `npm install react-anchor-link-smooth-scroll-history`

2. Add script

```js
import React from 'react'
import ReactDOM from 'react-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll-history'

const SmoothScroll = () => (
  <div>
    <AnchorLink href='#things'>Things</AnchorLink>
    <AnchorLink href='#stuff'>Stuff</AnchorLink>

    <section id='things'>
     <h2>Things</h2>
    </section>
    <section id='stuff'>
      <h2>Stuff</h2>
    </section>
  </div>
)

ReactDOM.render(
  <SmoothScroll />,
  document.getElementById('content')
)
```

3. Options; offset the amount of pixels from the top, for if you have a sticky navigation.

```js
 <AnchorLink offset='100' href='#things'>Stuff</AnchorLink>
```

4. In case of a anything other than a text node as the child element.

```js
 <AnchorLink href=''>
  <img src='...' data-href='#things' alt='...' />
 </AnchorLink > 
```


## Licence

Licensed under the [MIT](https://opensource.org/licenses/MIT) Licence.
