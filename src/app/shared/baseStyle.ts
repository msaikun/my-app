import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
html, body, div, span, h1, h2, h3, h4, h5, h6, p,
a, abbr, em, img, i, ol, ul, li, fieldset, form, 
label, footer, header, menu, nav, section {
	margin: 0;
	padding: 0;
	vertical-align: baseline;
  box-sizing: border-box;
}

ol, ul {
	list-style: none;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.hidden {
  position : absolute;
  width    : 0;
  height   : 0;
  opacity  : 0;
  padding  : 0;
  margin   : 0;
  border   : none;
  outline  : none;
}

.disabled {
  opacity : .7;
  cursor  : default;
}

fieldset {
  min-width : 0;
  max-width : 100%;
  width     : 100%;
}`;
