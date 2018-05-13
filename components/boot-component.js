/**
 * application: janavm
 * 
 */

define(['h-vue', 'jana749x1011-component'], ({ H }, jana749x1011Component) => {

  const version = '0.0.1';

  const components = {
    'jana749x1011-view': jana749x1011Component
  }

  const render = H(function(h) {
    
    return h('div',
      h('h1', this.titulo),
      h('jana749x1011-view')
    )

    // img style='display:block; width:100px;height:100px;' id='base64image'                 
    //    src='data:image/jpeg;base64, LzlqLzRBQ...<!-- base64 data -->' />

  })

  const data = () => ({
    'titulo': 'JANAINA VIANA'
  })


return { version, data, render, components }

})

