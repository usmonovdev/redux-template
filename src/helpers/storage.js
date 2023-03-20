export const saveToken = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch {
        console.log("Error in saving data!");
    }
}