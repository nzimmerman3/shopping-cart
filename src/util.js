export const formatCurrency = (num) => {
    return "$" + Number(num).toFixed(2).toLocaleString() + " "
}

export const formatDescription = (desc, limit=100) => {
    return(desc.length > limit ? desc.substring(0, limit) + "..." : desc)
}