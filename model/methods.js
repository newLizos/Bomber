const { default: axios } = require("axios")

const methods = {
    async post(url, body, falseMessage) {
        await axios.post(url, body).then((res) => console.log(res.status)).catch((err) => console.log(falseMessage))
    },
    async postHeade(url, body, header, falseMessage) {
        await axios.post(url, body, { headers: header }).then((res) => console.log(res.status)).catch((err) => console.log(falseMessage))
    },
    async postError(url, body) {
        await axios.post(url, body).then((res) => console.log(res.status)).catch((err) => console.log(err))
    },
    async get(url, errorText) {
        await axios.get(url).then((res) => console.log(res.status)).catch(() => console.log(errorText))
    },
    async getError(url) {
        await axios.get(url).then((res) => console.log(res.status)).catch((err) => console.log(err))
    },
    async getHeade(url, header, errorText) {
        await axios.get(url, { headers: header }).then((res) => console.log(res.status)).catch(() => console.log(errorText))
    }
}

const user = {
    saveUser(userId, refDatabase) {
        return new Promise(async (resolve, reject) => {
            const date = Date.now()
            const getUserData = await refDatabase.create({ userId: userId, dataTime: date })
        })
    }
}

module.exports = { methods, user }