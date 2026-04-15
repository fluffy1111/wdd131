document.getElementById("lastModified").innerHTML = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

const kitty_crimanals = [
  {
    kittyCard: "Nigerian slasher",
    location: "Aba, Nigeria",
    incarserated: "2005, August, 7",
    kill_count: 11500,
    imageUrl:
    "https://t4.ftcdn.net/jpg/00/66/23/39/240_F_66233948_PZNkyexlCBb80NFf4UpS4RH7ScGC2LuI.jpg"
  },
  {
    kittyCard: "Utah paunser gang",
    location: "Manti, Utah, United States",
    incarserated: "1888, May, 21",
    kill_count: 74792,
    imageUrl:
    "https://t4.ftcdn.net/jpg/04/77/27/33/240_F_477273341_9U7UBC6llMx788snnFp4cvkNFSYv1aba.jpg"
  },
  {
    kittyCard: "Utah mouser",
    location: "Payson, Utah, United States",
    incarserated: "2015, June, 7",
    kill_count: 96630,
    imageUrl:
    "https://t3.ftcdn.net/jpg/02/36/99/22/240_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg"
  },
  {
    kittyCard: "Guam slinker",
    location: "Yigo, Guam",
    incarserated: "2020, May, 2",
    kill_count: 6861,
    imageUrl:
    "https://t4.ftcdn.net/jpg/00/74/15/95/240_F_74159556_67n5823V7Ei87a4g6JJnYHC0yMSo1AEy.jpg"
  },
  {
    kittyCard: "Washington D.C. fuzller",
    location: "Kensington, Maryland, United States",
    incarserated: "1974, November, 19",
    kill_count: 156558,
    imageUrl:
    "https://t4.ftcdn.net/jpg/01/82/25/35/240_F_182253513_g1U1140bP8g7Y9fyhrv8S3eRcHYpRlVy.jpg"
  },
  {
    kittyCard: "Perúviun theaf",
    location: "Lima, Perú",
    incarserated: "1986, January, 10",
    kill_count: 9600,
    imageUrl:
    "https://t4.ftcdn.net/jpg/06/25/57/19/240_F_625571921_tUlFUGv94qKWk7UNhoVNwQ9B9Aq0TLuv.jpg"
  },
  {
    kittyCard: "Mexicn wigguler",
    location: "Mexico City, Mexico",
    incarserated: "1983, December, 2",
    kill_count: 116642,
    imageUrl:
    "https://t3.ftcdn.net/jpg/02/20/75/74/240_F_220757428_lMzj1gZ7RkomNqUDQrPBbH4baALlx56Y.jpg"
  },
  // Add more temple objects here...
  {
    kittyCard: "Philippines sleanker",
    location: "Bacolod Airport, Bacolod, Philippines",
    incarserated: "2026, May, 31",
    kill_count: 26700,
    imageUrl: 
    "https://t4.ftcdn.net/jpg/02/56/25/35/240_F_256253532_WvN8LV3PYhBI4Pn9yXlbWgs60A1vYx5v.jpg"
  },
  {
    kittyCard: "Alaskan pussy",
    location: "Fairbaks, Alaska, USA",
    incarserated: "2025, September, 27",
    kill_count: 10000,
    imageUrl: 
    "https://t3.ftcdn.net/jpg/04/48/89/06/240_F_448890631_cq8qa7NzVjwzBVG0BICrGyjuAaF3yjKl.jpg"
  },
  {
    kittyCard: "British soft paw",
    location: "Langley, British Columbia, Canada",
    incarserated: "2010, May, 2",
    kill_count: 28165,
    imageUrl: 
    "https://t4.ftcdn.net/jpg/01/12/48/29/240_F_112482963_Bdyb5YPGh0dMmVf8WVV2x0GjITEeNZXP.jpg"
  }
];

function KittyCard() {
  kitty_crimanals.forEach(cats => {
      //createing the tags
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let incarserated = document.createElement("p");
    let kill_count = document.createElement("p");
    let img = document.createElement("img");

      //content of the tags
    name.textContent = cats.kittyCard;
    location.innerHTML = `<span class="label">Location</span> ${cats.location}`;
    incarserated.innerHTML = `<span class="label">Incarserated</span> ${cats.incarserated}`;
    kill_count.innerHTML = `<span class="label">Kill Count</span> ${cats.kill_count}`;
    img.setAttribute("src", cats.imageUrl);
    img.setAttribute("alt", `${cats.kittyCard} prisonor`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(incarserated);
    card.appendChild(kill_count);
    card.appendChild(img);

      //conect div class
    document.querySelector(".container").appendChild(card);
  });
};

KittyCard ();

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
};

pro ();