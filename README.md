# Entypo Icons - React Component
> A React component for the Entypo SVG icon library.

React-Entypo sets up all the icons of the [Entypo SVG library](http://www.entypo.com/ "Entypo") to be used as components which will render as inline SVGs. Both the main set and the Social Extension are included. The SVGs are set with defaults styling to be the same size as the base text in the container they're placed. No CSS is supplied by 'react-entypo'; therefore, any default colors or other styles will have to be passed to the component or set by CSS.

The SVGs use the same names as the files in the Entypo SVG library, but camel-cased instead of hyphens, and any special characters removed.


## Install

```
npm install --save react-entypo
```

## Usage

Just import each icon you want to reference (and React, of course).

```js
var React = require('react');
var {EntypoArrowBoldRight, EntypoCalculator} = require('react-entypo');
```

or, import the ES6 way...

```js
import React from 'react';
import {EntypoArrowBoldRight, EntypoCalculator} from 'react-entypo';
```

...or, reference the icon by file. Initial path is 'react-entypo/lib/entypo/[ICONNAME]' where ICONNAME is the name of the icon (camelCased).**[1]**
```js
import React from 'react';
import EntypoArrowBoldRight from 'react-entypo/lib/entypo/arrowBoldRight';
import EntypoCalculator from 'react-entypo/lib/entypo/calculator';
```

...then reference like any other component: `<EntypoArrowBoldRight />`, `<EntypoCalculator/>`.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [style] | `String` |  | Additional inline styles, adds to "display:inline-block; height:1em; width:1em; user-select:none;" |
| [className] | `String` |  | An extra set of CSS classes to add to the component. Default is "entypo-icon entypo--[ICONNAME]" |
| [viewBox] | `String` | `'0 0 20 20'` | Default viewbox |

Other attributes can be passed but have no defaults. Examples include `data-` or `id` attributes.

> **[1]** - This will reduce the final package size.  Using the object notation in the above examples brings with them all the icons in that object (all 411 of them).  By referencing with the path name to the icon specifically means that only those specified will be in the final build file.  The downside is notation; however, as it's much easier to use the object notation as noted above to reference the icons and leaves fewer lines of code in your development files.</small>


## Styles

Since no styles other than the very basic inline are supplied.  Here is suggested starting CSS for the icon to pick up the current text color of the container it's in.  Default color is black.

```
.entypo-svgicon {
  fill: currentColor;
}
```

---
## TODO

- Create docs page to reference icons and names.

---
## Attribution
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) @ [Daniel Bruce](http://www.entypo.com/ "Entypo")
