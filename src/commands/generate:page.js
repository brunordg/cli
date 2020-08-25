
const command = {
  name: 'generate:page',
  description: 'Generate new page inside src/pages',
  run: async toolbox => {
    const { 
        parameters, 
        createComponent,
    } = toolbox;

    const name = parameters.first;
    
    await createComponent('src/pages', name);
    
  }
}

module.exports = command
