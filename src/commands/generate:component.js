
const command = {
  name: 'generate:component',
  description: 'Generate new component inside src/page',
  run: async toolbox => {
    const { 
        parameters, 
        createComponent,
    } = toolbox;

    const name = parameters.first;

    await createComponent('src/components', name);
    
  }
}

module.exports = command
