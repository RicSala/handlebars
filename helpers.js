export const textColor = (type) => {
    if (type === "danger") return "text-red-500";
    else if (type === "success") {
        console.log("success")
        return "text-blue-500 hover:text-yellow-300"
    }
    else return "text-black";
}
