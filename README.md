# Vue plugins

## Font plugin
### usage

```js
import FontDirectivesPlugin from '../plugins/FontDirectivesPlugin';

createApp(App)
    .use(FontDirectivesPlugin)
    .mount('#app')
```
Plugin imports scss file
```js
import '../style/global.scss';
```

- v-font-size
```html
<span v-font-size:bold="21"> v-font-size:fontWeight="fontSize" </span>
```
- v-heading
```html
<span v-font-size:bold v-heading:h3> v-heading:h1 </span>
(available: options h1 - h6)
```
- v-font-style
```html
<span v-font-style:italic> v-font-style:italic </span>
(available options: initial, inherit, italic, normal, revert, oblique, unset)
```
- v-font-color
```html
<span v-font-color:#41b884>#41b884</span>
</span>
```
- v-font-bg-color
```html
<span v-font-bg-color:#41b884 v-font-color:#fff>#41b884</span>
```
- v-font-weight
```html
<span v-font-weight:bold> v-font-weight:bold </span>
```

## Alert
### usage

```js
import AlertPlugin from '../plugins/AlertPlugin';

createApp(App)
    .use(AlertPlugin)
    .mount('#app')
```
View:
```html
<base-alert alert-type="secondary">
    <p>This is secondary alert</p>
</base-alert>
```
alert-type: primary (default), secondary, success, danger, warning, info, light, dark
