// [VexFlow](http://vexflow.com) - Copyright (c) Mohit Muthanna 2010.
// @author Mohit Cheppudira
//
// ## Description
//
// This file implements a generic base class for VexFlow, with implementations
// of general functions and properties that can be inherited by all VexFlow elements.

import { Vex } from './vex';

export class Element {
  constructor() {
    this.attrs = {
      id: '',
      el: null,
      type: 'Base',
    };

    this.boundingBox = null;
    this.context = null;
    this.rendered = false;
  }

  isRendered() { return this.rendered; }
  setRendered(rendered = true) { this.rendered = rendered; return this; }

  getAttributes() { return this.attrs; }
  getAttribute(name) { return this.attrs[name]; }
  setAttribute(name, value) { this.attrs[name] = value; return this; }

  getContext() { return this.context; }
  setContext(context) { this.context = context; return this; }
  getBoundingBox() { return this.boundingBox; }

  // Validators
  checkContext() {
    if (!this.context) {
      throw new Vex.RERR('NoContext', 'No rendering context attached to instance');
    }
    return this.context;
  }
}

