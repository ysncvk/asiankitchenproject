const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// filter buttons

let buttonDIV = document.getElementById("buttonDIV")
let allButton = document.createElement("button")
allButton.setAttribute("class","btn btn-outline-dark btn-item")
allButton.setAttribute("type","button")
allButton.setAttribute("onclick","showMenu(menu)")
allButton.innerText = "All"
buttonDIV.appendChild(allButton)

let koreaButton = document.createElement("button")
koreaButton.setAttribute("class","btn btn-outline-dark btn-item")
koreaButton.setAttribute("type","button")
koreaButton.setAttribute("onclick", "btnClick('Korea')")
koreaButton.innerText = "Korea"
buttonDIV.appendChild(koreaButton)

let japanButton = document.createElement("button")
japanButton.setAttribute("class","btn btn-outline-dark btn-item")
japanButton.setAttribute("type","button")
japanButton.setAttribute("onclick", "btnClick('Japan')")
japanButton.innerText = "Japan"
buttonDIV.appendChild(japanButton)

let chinaButton = document.createElement("button")
chinaButton.setAttribute("class","btn btn-outline-dark btn-item")
chinaButton.setAttribute("type","button")
chinaButton.setAttribute("onclick", "btnClick('China')")
chinaButton.innerText = "China"
buttonDIV.appendChild(chinaButton)



showMenu(menu);

function showMenu(menu) {
  let sectionDOM = document.querySelector(".section-center");
  sectionDOM.innerHTML = "";
  for (let i = 0; i < menu.length; i++) {
    const item = menu[i];
    sectionDOM.innerHTML += `
    <div class="menu-items col-sm-6">
    <img
      src="${item.img}"
      alt="${item.title}"
      title="${item.title}"
      class="photo"
    />
    <div class="menu-info">
      <div class="menu-title">
        <h4>${item.title}</h4>
        <h4>${item.price}</h4>
      </div>
      <div class="menu-text">${item.desc}</div>
    </div>
  </div>
    `;
  }
}
let category
function btnClick(category) {
  let result = menu;
  if (category !== "All") {
    result = menu.filter((item) => {
      return item.category == category;
    });
  }
  showMenu(result);
}