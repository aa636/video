export const sessionCache = {
    set(key, value) {
        if (!sessionStorage) return
        if (value != null) sessionStorage.setItem(key, value)
    },
    get(key) {
        if (!sessionStorage) return null
        return sessionStorage.getItem(key)
    },
    setJson(key, value) {
        if (!sessionStorage) return
        if (value != null) this.set(key, JSON.stringify(value))
    },
    getJson(key) {
        if (!sessionStorage) return null
        const value = this.get(key)
        if (value != null) return JSON.parse(value)
    },
    remove(key) {
        sessionStorage.removeItem(key)
    }
}

export const localCache = {
    set(key, value) {
        if (!localStorage) return
        if (value != null) localStorage.setItem(key, value)
    },
    get(key) {
        if (!localStorage) return null
        return localStorage.getItem(key)
    },
    setJson(key, value) {
        if (!localStorage) return
        if (value != null) this.set(key, JSON.stringify(value))
    },
    getJson(key) {
        if (!localStorage) return null
        const value = this.get(key)
        if (value != null) return JSON.parse(value)
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}
