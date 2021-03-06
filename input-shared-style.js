import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="input-shared-style">
  <template>
    <style>
      :host {
        vertical-align: middle;
      }
      :host([hidden]),
      [hidden] {
        display: none !important;
      }
      :host([disabled]),
      [disabled] {
        pointer-events: none;
      }
      :host(:focus),
      :focus {
        outline: none;
      }

      /**
       * general input style
       */
       button,
       select {
         -moz-appearance: none;
         -webkit-appearance: none;
         appearance: none;
         background: transparent;
         border: var(--inner-input-border-width, thin) solid transparent;
         box-sizing: border-box;
       }

      input,
      #input {
        vertical-align: inherit;
        color: inherit;
        min-width: inherit;
        max-width: inherit;
        box-sizing: content-box;
        border-style: var(--input-border-style, dotted);
        border-width: var(--input-border-width, thin);
        border-color: var(--input-border-color, rgba(0,0,0,0.25));
      }

      button,
      input,
      select,
      #input {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        font-style: inherit;
        outline: none;
        line-height: normal;
        cursor: var(--input-cursor, initial);
        text-align: var(--input-align, center);
        transition-duration: var(--input-transition-duration, 250ms);
        transition-timing-function: var(--input-transition-timing-function, cubic-bezier(0.6, 1, 0.2, 1));
        transition-property: var(--input-transition-property, background-color);
        padding: var(--input-padding, 0.25em);
        color: var(--input-color, inherit);
        background-color: var(--input-background, transparent);
        border-radius: var(--input-border-radius, 0.25em);
        @apply --input-style;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
        -webkit-backface-visibility: hidden;
        -webkit-transform: rotate(0);
        -moz-transform: rotate(0);
        transform: rotate(0);
        margin: 0;
      }

      select {
        color: var(--inner-input-color, inherit);
        background-color: var(--inner-input-background, transparent);
        border-width: var(--inner-input-border-width, thin);
        border-color: var(--inner-input-border-color, transparent);
        border-style: var(--inner-input-border-style, dotted);
        border-radius: var(--inner-input-border-radius, 0.1em);
      }

      /**
       * focus & hover
       */
       :host(:focus) #input,
       :host(:hover) #input,
       #input:hover,
       #input:focus,
       input:focus,
       input:hover {
         color: var(--input-focus-color, inherit);
         background-color: var(--input-focus-background, rgba(0,0,0,0.1));
         border-style: var(--input-focus-border-style, dotted);
         border-color: var(--input-focus-border-color, rgba(0,0,0,0.5));
         border-width: var(--input-border-width, thin);
         outline: none;
         @apply --input-focus;
       }

       select:focus,
       select:hover,
       button:focus,
       button:hover {
         color: var(--inner-input-focus-color, inherit);
         background-color: var(--inner-input-focus-background, rgba(0,0,0,0.1));
         border-style: var(--inner-input-focus-border-style, dotted);
         border-color: var(--inner-input-focus-border-color, rgba(0,0,0,0.2));
         border-width: var(--inner-input-border-width, thin);
         outline: none;
         @apply --input-focus;
       }

      /**
       * invalid
       */
      :host([invalid]) #input,
      :host([invalid]:hover) #input,
      :host([invalid]:focus) #input,
      #input:invalid:hover,
      #input:invalid:focus {
        color: var(--input-invalid-color, inherit);
        background-color: var(--input-invalid-background, rgba(255,0,0,0.25));
        border-width: var(--input-border-width, thin);
        border-style: var(--input-invalid-border-style, dotted);
        @apply --input-invalid;
      }
      :host([invalid]) #input,
      #input:invalid {
        border-color: var(--input-invalid-border-color, rgba(255,0,0,0.5));
      }
      :host([invalid]:hover) #input,
      :host([invalid]:focus) #input,
      #input:invalid:hover,
      #input:invalid:focus {
        border-color: var(--input-focus-border-color, rgba(255,0,0,1));
      }

      /**
       * inner inputs
       */
      #input integer-input,
      #input number-input,
      #input text-input {
        --input-color: var(--inner-input-color, inherit);
        --input-background: var(--inner-input-background, transparent);
        --input-border-width: var(--inner-input-border-width, thin);
        --input-border-color: var(--inner-input-border-color, transparent);
        --input-border-style: var(--inner-input-border-style, dotted);
        --input-padding: var(--inner-input-padding, 0);
        --input-border-radius: var(--inner-input-border-radius, 0.1em);
        --input-focus-color: var(--inner-input-focus-color, inherit);
        --input-focus-background: var(--inner-input-focus-background, rgba(0,0,0,0.1));
        --input-focus-border-color: var(--inner-input-focus-border-color, rgba(0,0,0,0.15));
        --input-focus-border-style: var(--inner-input-focus-border-style, dotted);
        --input-invalid-color: var(--inner-input-invalid-color, inherit);
        --input-invalid-background: var(--inner-input-invalid-background, rgba(0,0,0,0.1));
        --input-invalid-border-style: var(--inner-input-invalid-border-style, dotted);
        --input-invalid-border-color: var(--inner-input-invalid-border-color, rgba(0,0,0,0.25));
      }

      /**
       * disabled
       */
      :host([disabled]) #input {
        color: var(--input-disabled-color, inherit);
        background-color: var(--input-disabled-background, transparent);
        font-style: var(--input-disabled-font-style, oblique);
        opacity: var(--input-disabled-opacity, 0.9);
        @apply --input-disabled;
        pointer-events: none;
      }

      /**
       * reset button
       */
       #input .reset {
         display: inline-flex;
         align-self: center;
         margin: 0 0.1em;
         cursor: pointer;
         border-width: var(--inner-input-border-width, thin);
         border-style: var(--inner-input-border-style, dotted);
         border-color: var(--inner-input-border-color, transparent);
         box-sizing: content-box;
         opacity: 0.5;
         color: inherit;
         background-color: transparent;
         transition-property: background, opacity;
         height: 1em;
         width: 1em;
         border-radius: 50%;
         padding: 0.15em;
       }
       #input .reset > svg {
         height: 100%;
         width: 100%;
         fill: currentColor;
       }
       #input .reset:focus,
       #input .reset:hover {
         border-style: var(--inner-input-focus-border-style, dotted);
         outline: none;
       }
       #input .reset:hover {
         opacity: 1;
         color: var(--inner-input-focus-color, inherit);
         background-color: var(--inner-input-focus-background, rgba(0,0,0,0.1));
       }
       #input .reset:focus {
         border-color: var(--inner-input-focus-border-color, var(--inner-input-focus-background, rgba(0,0,0,0.2)));
       }
      /**
       * placeholder
       */
      #input::-webkit-input-placeholder,
      #input::placeholder {
        color: currentColor;
        opacity: var(--input-placeholder-opacity, 0.5);
        text-align: var(--input-placeholder-align, center);
        @apply --input-placeholder;
      }

      #input::-ms-input-placeholder {
        color: currentColor;
        opacity: var(--input-placeholder-opacity, 0.5);
        text-align: var(--input-placeholder-align, center);
      }

      :host([invalid]) #input::-webkit-input-placeholder,
      :host([invalid]) #input::placeholder {
        color: var(--input-invalid-color, inherit);
      }

      /**
       * selection
       */
      ::-moz-selection {
        color: inherit;
        background-color: transparent;
      }
      :hover::-moz-selection {
        color: var(--input-selection-color, inherit);
        background-color: var(--input-selection-background, rgba(255,255,255,0.5));
      }
      ::selection {
        color: inherit;
        background-color: transparent;
      }
      :hover::selection {
        color: var(--input-selection-color, inherit);
        background-color: var(--input-selection-background, rgba(255,255,255,0.5));
      }

      /**
       * browser specific style fixes
       */
      ::-moz-focus-inner {
        border-width: 0;
        border-style: none;
        padding: 0;
      }
      ::-moz-focusring {
        border-width: 0;
        border-style: none;
        color: transparent !important;
        text-shadow: 0 0 0 var(--input-focus-color, #000);
      }

      select:focus::-ms-value {
        background: transparent;
      }

      ::-ms-clear,
      ::-ms-expand {
        display: none;
      }

      ::-webkit-input-edit-text,
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button,
      ::-webkit-search-cancel-button,
      ::-webkit-clear-button {
        color: currentColor;
        cursor: pointer;
      }

      [invisible] {
        visibility: hidden;
      }

    </style>
  </template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
