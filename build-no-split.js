const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
let config = defaults.__get__('config');

config.optimization.splitChunks = {
    cacheGroups: {
        default: false,
    },
};

config.optimization.runtimeChunk = false;

config.output.filename = 'static/js/[name].js';
config.output.chunkFilename = 'static/js/[name].chunk.js';

config.plugins[4].filename = 'static/css[name].css';