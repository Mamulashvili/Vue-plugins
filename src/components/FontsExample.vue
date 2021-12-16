<template>
  <h3>Fonts</h3>
  <ul>
    <li>
      <p v-font-size="18">
        font-size:
        <span v-font-size:bold> v-font-size:fontWeight="fontSize" </span>
        (fontWeight is optional)
      </p>
    </li>
    <li>
      <p v-font-size="18">
        heading:
        <span v-font-size:bold> v-heading:h1 </span>
        (available: options h1 - h6)
      </p>
    </li>
    <li>
      <p v-font-size="18">
        font style:
        <span v-font-size:bold> v-font-style:italic </span>
        (available options: initial, inherit, italic, normal, revert, oblique,
        unset)
      </p>
    </li>
    <li>
      <p v-font-size="18">
        font color:
        <span v-font-size:bold>
          v-font-color: <span v-font-color:#41b884>#41b884</span>
        </span>
        (Available rgb, hex color codes)
      </p>
    </li>
    <li>
      <p v-font-size="18">
        font color:
        <span v-font-size:bold>
          v-font-bg-color:
          <span v-font-bg-color:#41b884 v-font-color:#fff>#41b884</span>
        </span>
        (Available rgb, hex color codes)
      </p>
    </li>
  </ul>
</template>
