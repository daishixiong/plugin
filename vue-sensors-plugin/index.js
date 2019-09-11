/**
* @Description: 神策统计
* @author DaiSX
* @date 2019-07-29
*/

import sensors from 'sa-sdk-javascript'
const ENV_CONFIG = {
    development: require('@/../config').dev.sensors,
    production: require('@/../config').build.sensors
}
const config = ENV_CONFIG[process.env.NODE_ENV]

let S = {
    create (config) {
        window[config.name || 'sensors'] = sensors
        sensors.init(config)
    }
}

function install (Vue, propsConfig) {
    if (install.installed) return
    install.installed = true
    return new Promise((resolve, reject) => {
        if (propsConfig) {
            let newConfig = Object.assign({}, config, propsConfig)
            return S.create(newConfig)
        }
        return S.create(config)
    })
}
export default install
