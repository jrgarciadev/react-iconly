const { forEach } = require('p-iteration')
const fs = require('fs-extra')
const { join } = require('path')
const { isEmpty, startCase, replace } = require('lodash')
const iconTags = require('../distIcons/tags.json')

const sets = ['bold', 'light', 'bulk', 'broken', 'two-tone', 'curved']

async function build(rootDir) {
  const iconsDir = join(rootDir, 'icons')
  const distIconsDir = join(rootDir, 'distIcons')
  await forEach(sets, async (set) => {
    const setIconsDir = join(iconsDir, set)
    const setIconsDistDir = join(distIconsDir, set)

    await createSvgsDist(setIconsDir, setIconsDistDir, set)
  })
}

async function createSvgsDist(srcSvgDir, distSvgDir, iconSet) {
  const svgFiles = (await fs.readdir(srcSvgDir)).filter((fileName) => {
    return !fileName.startsWith('.') && fileName.endsWith('.svg')
  })
  const icons = []

  // srcFilePath: /website/distIcons/bold/data.json
  const distSvgFilePath = join(distSvgDir, `data.json`)

  await forEach(svgFiles, async (fileName) => {
    // srcFilePath: /website/icons/bold/Activity.svg
    const srcFilePath = join(srcSvgDir, fileName)
    const iconName = replace(fileName, '.svg', '')

    if (!isEmpty(iconTags[iconName])) {
      // start icon
      const icon = {}
      icon.set = iconSet
      icon.name = startCase(iconName)
      icon.tags = iconTags[iconName]
      icon.componentName = iconName
      // read svg file content
      const data = await fs.readFile(srcFilePath, 'utf8')
      icon.svgPath = data
      icons.push(icon)
    }
  })
  const srcJsonStr = JSON.stringify(icons, null, 2) + '\n'
  await fs.writeFile(distSvgFilePath, srcJsonStr)
  console.log(
    `Icons set ${iconSet} created successfully! [SIZE: ${icons.length}]`
  )
}

// let's do it
build(join(__dirname, '..'))
