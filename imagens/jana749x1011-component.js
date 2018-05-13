/**
 * application: janavm
 * 
 */

define(['h-vue'], ({ H }) => {

  const render = H(function(h) {
    
    return h('img', {'attrs': {'src': this.imagem }})
    
  });

  const data = () => ({
    'imagem': 'imagens/jana_749x1011.png'
  });

return { data, render }

})





