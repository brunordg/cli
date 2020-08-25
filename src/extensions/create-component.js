
module.exports = (toolbox) => {
    const { filesystem, template, print: { success, error } } = toolbox;

    async function isReactNative() {
        let isReactNative = false;

        if (filesystem.exists('package.json')) {
            const package = await filesystem.read('package.json', 'json');

            isReactNative = !!package.dependencies['react-native']; // !! Convert para booleano
        }

        return isReactNative;
    }

    async function createComponent(folder, name) {
        if (!name) {
            error('Name must be specified');
            return;
        }

        await template.generate({
            template: 'component.js.ejs',
            target: `${folder}/${name}/index.js`,
            props: { name }
        });
    
        const styleTemplate = (await isReactNative()) ? 'styles-rn.js.ejs' : 'styles.js.ejs';
    
        await template.generate({
            template: styleTemplate,
            target: `${folder}/${name}/styles.js`,
        })
    
        success(`Generated ${folder}/${name}`);
    }

    toolbox.createComponent = createComponent
};