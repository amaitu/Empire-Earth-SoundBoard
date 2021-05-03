const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer;

module.exports = {
    configureWebpack: config => {
        // if (process.env.NODE_ENV !== 'production') return

        return {
            plugins: [
                new PrerenderSpaPlugin({
                    // Absolute path to compiled SPA
                    staticDir: path.resolve(__dirname, 'dist'),
                    // routes that should be pre-rendered:
                    routes: [
                        '/',
                    ],

                    renderer: new Renderer({
                        injectProperty: '__PRERENDER_INJECTED',
                        inject: {
                            prerendered: true
                        },
                        renderAfterDocumentEvent: 'app.rendered'
                    })
                })
            ]
        }
    }
}
