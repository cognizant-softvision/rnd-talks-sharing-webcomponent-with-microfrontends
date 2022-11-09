console.log("hello world from inside js")

import("Midnight/flipcard")
    .then(modulo => {
        console.log("Loaded", modulo)
        document.getElementById("ok").style.display = "unset"
    })
    .catch(error => {
        console.error("Error", error)
        document.getElementById("error").style.display = "unset"
    })