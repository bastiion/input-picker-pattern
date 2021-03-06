/**
 * mixin to extend an element, to be compatible with iron-form
 *
 * @mixinFunction
 * @polymer
 */
export const FormElementMixin = (superClass) => { // eslint-disable-line no-unused-vars

  return class extends superClass {

    static get properties() {
      return {
        /**
         * required attribute
         */
        required: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true
        },

        /**
         * required attribute
         */
        invalid: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true
        },

        /**
         * disables the input
         */
        disabled: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true
        },

        /**
         * name of the input
         */
        name: {
          type: String
        },

        /**
         * value of the input
         */
        value: {
          type: Object,
          notify: true
        },

        /**
         * is true when the value is not undefined
         */
        _valueIsSet: {
          type: Boolean,
          value: false
        },

        /**
         * defines the property that should be used for the value
         */
        propertyForValue: {
          type: String,
          observer: '_createReflectPropertyToValueObserver'
        },

        /**
         * default value of the input
         */
        default: {
          type: Object
        }
      }
    }

    static get observers() {
      return [
        '_computeInvalid(required, value)',
        '_computeValueIsSet(value)',
        '_defaultChanged(default)'
      ]
    }

    connectedCallback() {
      super.connectedCallback();
      this._ensureAttribute('tabindex', 0);
      if (this.value !== undefined) {
        this.set(this.propertyForValue, this.value);
      }
      if (this[this.propertyForValue] !== undefined) {
        this.set('value', this[this.propertyForValue]);
      }
    }

    _computeInvalid(required, value) {
      this.invalid = Boolean(required && !value);
    }

    _computeValueIsSet(value) {
      this._valueIsSet = value !== undefined;
    }

    _defaultChanged(def) {
      super._defaultChanged && super._defaultChanged(def);
      if (def && this.value === undefined) {
        let toSet = { value: def };
        if (this.propertyForValue) {
          toSet[this.propertyForValue] = def;
        }
        setTimeout( () => {
          this.setProperties(toSet);
        }, 0);
      }
    }

    /**
     * validates the input for iron-form
     */
    validate() {
      return !this.invalid;
    }

    /**
     * attach dom with `delegatesFocus: true` so that the element is also focussed while its's children are too, and to autofocus to first tabable
     */
    _attachDom(dom) {
      if (!this.shadowRoot) {
        this.attachShadow({
            mode: 'open',
            delegatesFocus: true
        });
        this.shadowRoot.appendChild(dom);
      }
      return this.shadowRoot;
    }

    _createReflectPropertyToValueObserver(prop) {
      if (prop !== undefined) {
        this._createPropertyObserver(prop, '_reflectPropertyToValue');
        this._createPropertyObserver('value', '_reflectValueToProperty');
        if (this.value !== undefined) {
          this.set(this.propertyForValue, this.value);
        }
        if (this[this.propertyForValue] !== undefined) {
          this.set('value', this[this.propertyForValue]);
        }
      }
    }

    _reflectPropertyToValue() {
      this.set('value', this[this.propertyForValue]);
    }

    _reflectValueToProperty() {
      this.set(this.propertyForValue, this.value);
    }
  }
};

