/**
 * application: janavm
 * 
 */

define(['h-vue'], ({ H }) => {

  const version = '0.0.1';

  const render = H(function(h) {
    
    return h('div',
      h('h1', this.titulo)
    );

  })

  const data = () => ({
    'titulo': 'JANAINA VIANA'
  })


return { version, data, render }

})