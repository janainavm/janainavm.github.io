/**
 * application: janavm
 * 
 */

define(['h-vue'], ({ H }) => {

  const render = H(function(h) {
    
    return h('img', {'attrs': {'src': this.imagem }})
    
  });

  const data = () => ({
  });

return { data, render }

})
