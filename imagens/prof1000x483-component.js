/**
 * application: janavm
 * 
 */

define(['h-vue'], ({ H }) => {

    const render = H(function(h) {
      
      return h('img', {'attrs': {'src': this.imagem }})
      
    });
  
    const data = () => ({
      'imagem': 'imagens/prof_1000x483.png'
    });
  
  return { data, render }
  
  })
  
  
  
  
  
  