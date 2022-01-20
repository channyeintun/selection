var selection = function () {
   this.init = function () {
      //document.onselectionchange is supported on most browsers
      document.addEventListener("selectionchange",selHandler,true);
   }
   this.stop=function (){
         document.removeEventListener("selectionchange",selHandler,true)
   }
}

function selHandler(e) {
      let target = document.activeElement;
      if (target && target.matches('input,textarea')) {
         let custom = new CustomEvent('selection', {
            detail: {
               start: target.selectionStart,
               end: target.selectionEnd,
               direction: target.selectionDirection,
               value:target.value
            },
         })
         target.dispatchEvent(custom);
      }
   }