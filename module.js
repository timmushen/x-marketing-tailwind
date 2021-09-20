import { resolve, join } from 'path'
export default function (moduleOptions) {
  // Options Merge
  // get all options for the module depending on how its set up in nuxt
  const options = {
    ...moduleOptions,
    ...this.options.XMarketingTailwind
  }

  this.nuxt.hook('components:dirs', (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, 'components'),
      prefix: 'x'
    })
  })
}
module.exports.meta = require('./package.json')