let url = "http://universities.hipolabs.com/search?name=";
let click = document.querySelector("button");

click.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let clgarr = await getCollege(country);
    show(clgarr)
});

function show(clgarr) {
     let list = document.querySelector("#list"); 
     list.innerText = "";
    for (col of clgarr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }
};

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    }
    catch (e) {
        console.log("Not found ", e);
        return [];
    }
}