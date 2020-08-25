
const command = {
  name: 'get:nodeversion',
  description: 'Return the versions of Node',
  run: async toolbox => {
    const { 
        system,
        print: { success, error }
    } = toolbox;
    
    const nodeVersion = await system.run('node -v', { trim: true });

    success(`A versão do node é: ${nodeVersion}`);
    
  }
}

module.exports = command
