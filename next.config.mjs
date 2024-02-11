/** @type {import('next').NextConfig} */
const nextConfig = {};

const withModernizr = require("next-plugin-modernizr");
module.exports = withModernizr();


export default nextConfig;
