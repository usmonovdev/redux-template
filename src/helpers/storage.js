export const saveToken = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch {
        console.log("Error in saving data!");
    }
}

export const getToken = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log("Error in getting data!");
    }
}