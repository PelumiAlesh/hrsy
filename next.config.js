/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')

module.exports = {
    ...nextConfig,
    output: 'export',
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  }


