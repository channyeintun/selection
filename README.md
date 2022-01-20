# Selection Change Polyfill

Selection change event for html input elements is only supported on firefox.  
So, I started writing my own poyfill for unsupported browsers.  
Barely functional, probably not useful to you :D

Check its availability on [caniuse](https://caniuse.com/?search=selectionchange).

## Getting Started  

| Event Name | selection |
| ----------- | ----------- |  
  
## Installtion
You can save the file directly or get it from npm  
 
`
npm i @channyeintun/selection
`

## Example
```html  
   <input id="mytext" />
   <p id="log"></p>
   <script src="selection.js"></script>
   <script>
      const selpolyfill = new selection();
      selpolyfill.init();
      const myInput = document.getElementById('mytext');
      myInput.addEventListener('selection', function (e) {
         log.textContent = `You selected ${e.detail.start} to ${e.detail.end}.
          Direction:${e.detail.direction}`
         console.log('detail', e.detail);
      })
   </script>
```  

## License  
This is [MIT Licensed](https://github.com/channyeintun/selection/blob/main/LICENSE).
