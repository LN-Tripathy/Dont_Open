let text = [
    "Initializing Hacking",
    "Initialized Hacking and started searching",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
]
const randomDelay = async ()=>{
    return new Promise((resolve, reject)=>{
        timeout = Math.ceil(Math.random()*7);
        setTimeout(() => {
            resolve();
        }, timeout*700);
    })
}

const addItem = async (item)=>{
    await randomDelay();
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = item;
    document.body.appendChild(container);
}

const dots = async ()=>{
    let t = setInterval(()=>{
        let last = document.body.lastElementChild;
        if(last.innerHTML.endsWith("....."))
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-5)
        else
            last.innerHTML += "."

    }, 200)

}


async function Main() {
    confirm("This link contains virus and malware, do you still want to run...");
    await dots()
    
    for (const items of text) {
        await addItem(items);
    }
}
Main()
