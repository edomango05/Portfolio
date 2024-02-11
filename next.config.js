const withModernizr = require('next-plugin-modernizr');
module.exports = withModernizr({
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
});