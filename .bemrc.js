module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: ["html", "css", "js"],
                    levels: {
                        "src/blocks/modules": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
