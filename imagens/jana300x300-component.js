/**
 * application: janavm
 * 
 */

define(['h-vue'], ({ H }) => {

    const render = H(function(h) {
      
      return h('img', {'attrs': {'src': this.imagem }})
      
    });
  
    const data = () => ({
      'imagem': 'imagens/jana_300x300.png'
    });
  
  return { data, render }
  
  })
  
  
  
  
  
  