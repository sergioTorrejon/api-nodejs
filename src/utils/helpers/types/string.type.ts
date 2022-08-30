const typeString = (element) => {
    try {
        return typeof element === "string"
    } catch (err) {
        throw new Error('El elmento no es un texto')
    }
    
}

export const valTypes = {
    typeString
}