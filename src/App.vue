<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
// stylelint-disable
/* prettier-ignore */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
dl, dt, dd, ul, ol, li,
pre,
fieldset, lengend, button, input, textarea,
th, td,
div, span {
    // 清除内外边距和设置盒模型
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

/* prettier-ignore */
fieldset, lengend, button, input, textarea, a {
    outline: none;
    -webkit-tap-highlight-color: transparent;
}

/* prettier-ignore */
body,
button, input, select, textarea {
    // 这里默认字体需要定义在 _variable.scss
    // font-family: $font-family;
}

a {
  color: inherit;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  // mobile
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;

  .header {
    height: 40px;
  }

  .clearfix {
    zoom: 1;

    &:after {
      display: block;
      clear: both;
      content: "";
      visibility: hidden;
      height: 0;
    }
  }
}
</style>
