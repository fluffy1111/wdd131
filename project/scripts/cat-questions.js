document.getElementById("lastModified").innerHTML = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "caotic, orange",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "lasy, striped",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "zoomy, cow",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "glutunus, black",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "playfull, hairless",
    averagerating: 5.0
  }
];

function pro () {
  products.forEach(tag => {
    //create tags
    let chose = document.createElement("option")
    //create content for tags
    chose.textContent = tag.name

    chose.setAttribute("value", tag.id)

    document.getElementById("product").appendChild(chose);
  });
}

pro ()