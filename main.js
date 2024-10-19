const Data = [
  {
    "image": {
      "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
      "mobile": "./assets/images/image-waffle-mobile.jpg",
      "tablet": "./assets/images/image-waffle-tablet.jpg",
      "desktop": "./assets/images/image-waffle-desktop.jpg"
    },
    "name": "Waffle with Berries",
    "category": "Waffle",
    "price": 6.50
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
      "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
      "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
      "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
    },
    "name": "Vanilla Bean Crème Brûlée",
    "category": "Crème Brûlée",
    "price": 7.00
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
      "mobile": "./assets/images/image-macaron-mobile.jpg",
      "tablet": "./assets/images/image-macaron-tablet.jpg",
      "desktop": "./assets/images/image-macaron-desktop.jpg"
    },
    "name": "Macaron Mix of Five",
    "category": "Macaron",
    "price": 8.00
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
      "mobile": "./assets/images/image-tiramisu-mobile.jpg",
      "tablet": "./assets/images/image-tiramisu-tablet.jpg",
      "desktop": "./assets/images/image-tiramisu-desktop.jpg"
    },
    "name": "Classic Tiramisu",
    "category": "Tiramisu",
    "price": 5.50
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
      "mobile": "./assets/images/image-baklava-mobile.jpg",
      "tablet": "./assets/images/image-baklava-tablet.jpg",
      "desktop": "./assets/images/image-baklava-desktop.jpg"
    },
    "name": "Pistachio Baklava",
    "category": "Baklava",
    "price": 4.00
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
      "mobile": "./assets/images/image-meringue-mobile.jpg",
      "tablet": "./assets/images/image-meringue-tablet.jpg",
      "desktop": "./assets/images/image-meringue-desktop.jpg"
    },
    "name": "Lemon Meringue Pie",
    "category": "Pie",
    "price": 5.00
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
      "mobile": "./assets/images/image-cake-mobile.jpg",
      "tablet": "./assets/images/image-cake-tablet.jpg",
      "desktop": "./assets/images/image-cake-desktop.jpg"
    },
    "name": "Red Velvet Cake",
    "category": "Cake",
    "price": 4.50
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
      "mobile": "./assets/images/image-brownie-mobile.jpg",
      "tablet": "./assets/images/image-brownie-tablet.jpg",
      "desktop": "./assets/images/image-brownie-desktop.jpg"
    },
    "name": "Salted Caramel Brownie",
    "category": "Brownie",
    "price": 4.50
  },
  {
    "image": {
      "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
      "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
      "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
      "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
    },
    "name": "Vanilla Panna Cotta",
    "category": "Panna Cotta",
    "price": 6.50
  }
];

let panier = [];

const grilleDessert = document.querySelector('.list_dessert');
const contenantPanier = document.querySelector('.panierdessert');

const contenuPanierVide = `
        <img src="/assets/images/illustration-empty-cart.svg" alt="">
              <p>Your added items will appear here</p>`

function afficherDesserts() {

  //AFFICHER LES DESSERTS 
  Data.forEach((dessert, index) => {
    //creer la carte dessert et inserer dans la grille
    dessert.id = index;
    const carteDessert = document.createElement('div');
    carteDessert.classList = 'block-grille';
    carteDessert.id = index;
    carteDessert.innerHTML = `
    <div class="blockimage blockdessertimage">
                <picture>
                  <!--
                  <source srcset="large.jpg" media="(min-width: 960px)" />
                  <source srcset="medium.png" media="(min-width: 600px)" />
                  -->
                  <img class="imagedessert" src=${dessert.image.desktop} alt="Image Description" />
                </picture>
                
                <button class="buttonadd">
                  Add To Cart
                </button>

              </div>

              <div class="blockdessertinfos">
                <p class="dessertcategorie">${dessert.category}</p>
                <p class="nomdessert">${dessert.name}</p>
                <p class="prixdessert">$ ${dessert.price.toFixed(2)}</p>
              </div>
              </div>
    `;

    grilleDessert.appendChild(carteDessert);

    const btnAjoutAuPanier = carteDessert.querySelector('.buttonadd');

    btnAjoutAuPanier.addEventListener('click', () => {
      ajouterPanier(dessert);
      afficherContenuPanier(carteDessert, btnAjoutAuPanier, index)
    });
  }
  );

  // AU CAS OU PANIER VIDE AFFICHER L'ILLUSTRATION
  if (panier.length === 0) {
    const panierVide = document.createElement('div');
    panierVide.classList = 'emptyimage';
    panierVide.innerHTML = contenuPanierVide;
    contenantPanier.appendChild(panierVide);
  } else {
    /* AFFICHER LE CONTENU DU PANIER */
    afficherContenuPanier(carteDessert, btnAjoutAuPanier, index);
  }
};


afficherDesserts();

function afficherContenuPanier(carteDessert, btnAjoutAuPanier, index) {

  const dessertPanier = panier.find(dessert => dessert.id === index);

  //MODIFIER LA CARTE DESSERT
  const btnChangerQuantite = document.createElement('div');
  btnChangerQuantite.classList = 'btnchangerquantite';
  btnChangerQuantite.innerHTML = `
            <button class="quantite-icon quantitediminuer">
                    <svg class="icon-moins icon-plus-moins" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                      <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
                    </svg>

                  </button>

                  <p class="quantite">
                    ${dessertPanier.quantite}
                  </p>

                  <button class="quantite-icon quantiteaugmente">
                    <svg class="icon-plus icon-plus-moins" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                      <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                    </svg>
                  </button>
            `;

  carteDessert.querySelector('.blockimage').removeChild(btnAjoutAuPanier);
  carteDessert.querySelector('.blockimage').appendChild(btnChangerQuantite);
  carteDessert.querySelector('.imagedessert').classList.add('imageactive');


  //AFFICHER LE PANIER
  //CALCULER LE PRIX TOTAL DU NBRE DU DESSERT
  dessertPanier.totalPrice = dessertPanier.quantite * dessertPanier.price;


  if (panier.length === 1) {
    const emptyNode = document.querySelector('.emptyimage');
    contenantPanier.removeChild(emptyNode);
    const totalSection = document.querySelector('.order-recap-section');
    totalSection.innerHTML = `
    <div class='total-section'>
    <div class="total-sec">  
    <p>Order Total</p>
    <p class='order-total'></p>
    </div>

    <div class="carbon-neutral-sec">
            <div class="carbon-neutral-icon">
              <img src="/assets/images/icon-carbon-neutral.svg" alt="">
            </div>
            <p> 
              This is <span>carbon-neutral</span> delivery
            </p>
          </div>

          <button class="confirm-order">
          Confirm Order
        </button>
        </div>
    `
    const confirmButton = document.querySelector('.confirm-order');

    confirmButton.addEventListener('click', () => {

      const confirnConteneur = document.querySelector('.conteneur-confirmation');
      panier.forEach(item => {
        confirnConteneur.innerHTML += `
        <div class="tab-confirm">
              <img src=${item.image.thumbnail} alt="">
              <div class="dessert-infos">
                <p class="small-title">${item.name}</p>
                <p class="info-price">1x<span> @  $${item.price.toFixed(2)}</span> </p>
              </div>

              <p class="montant">
                $${item.totalPrice.toFixed(2)}
              </p>
            </div>

          </div>
        `
      });

      confirnConteneur.innerHTML += `
        <div class="montant-total">
              <p class="text-montant">Order Total</p>
              <p class="total">$ ${prixTotal.toFixed(2)}</p>
            </div>
            <button class="confirm-order start-over">
              Start New Order
            </button>
      `;



      document.querySelector('.modal').style.display = 'flex';

      const startOver = document.querySelector('.start-over')
      startOver.addEventListener('click', () => {
        panier = []
        document.querySelector('.modal').style.display = 'none';
        location.reload();
      })
    })
  };

  //CALCUL QUANTITE ET PRIX TOTAUX
  calculTotaux();

  //CREER A AFFICHER LA TAB DESSERT DANS LE PANIER
  const tabdessert = document.createElement('div');
  tabdessert.classList.add(`tabdessert${index}`, 'tabdessert');
  tabdessert.innerHTML = `
            <div class="infodessert">
              <p class="titretextpetit">${dessertPanier.name}</p>
              <span class="info-quantite infosprix titrered titretextpetit">${dessertPanier.quantite}</span>
              <span class="info-prix infosprix titreprixpetit titrerose400">$ ${dessertPanier.price.toFixed(2)}</span>
              <span class="info-prix-total infosprix titretextpetit titrerose500">$ ${dessertPanier.totalPrice.toFixed(2)}</span>
            </div>

            <div class="iconsuprimer">
            <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
              <path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
            </svg>
            </div>
            
          </div>
            `;

  contenantPanier.appendChild(tabdessert);

  const augmenterQuantite = carteDessert.querySelector('.quantiteaugmente');
  const diminuerQuantite = carteDessert.querySelector('.quantitediminuer');
  const supprimerDessert = tabdessert.querySelector('.iconsuprimer')

  augmenterQuantite.addEventListener('click', () => {
    quantitePlus(dessertPanier, carteDessert, index);
    calculTotaux();
  });

  diminuerQuantite.addEventListener('click', () => {
    quantiteMoins(dessertPanier, carteDessert, index, btnAjoutAuPanier, btnChangerQuantite);
    calculTotaux();
  });

  supprimerDessert.addEventListener('click', () => {
    supprimerDessertPanier(dessertPanier, tabdessert, carteDessert, btnChangerQuantite, btnAjoutAuPanier);
    calculTotaux();
  });

}

function ajouterPanier(dessert) {
  panier.push({ ...dessert, quantite: 1 });
};


function quantitePlus(dessertPanier, carteDessert, index) {

  //Augmente la quantite
  dessertPanier.quantite++

  //Met a jour la quantite sur la carte dessert
  carteDessert.querySelector('.quantite').innerText = dessertPanier.quantite;

  //calcul le prix total
  dessertPanier.totalPrice = dessertPanier.quantite * dessertPanier.price;

  //Met a jour la quantite et le prix total dans le panier
  const tabdessert = document.querySelector(`.tabdessert${index}`);
  tabdessert.querySelector('.info-quantite').innerText = dessertPanier.quantite;
  tabdessert.querySelector('.info-prix-total').innerText = dessertPanier.totalPrice.toFixed(2);
};

function quantiteMoins(dessertPanier, carteDessert, index, btnAjoutAuPanier, btnChangerQuantite) {

  const tabdessert = document.querySelector(`.tabdessert${index}`);

  if (dessertPanier.quantite > 1) {

    dessertPanier.quantite--
    //calcul le prix total
    dessertPanier.totalPrice = dessertPanier.quantite * dessertPanier.price;

    //Met a jour la quantite et le prix total dans le panier
    carteDessert.querySelector('.quantite').innerText = dessertPanier.quantite;
    tabdessert.querySelector('.info-quantite').innerText = dessertPanier.quantite;
    tabdessert.querySelector('.info-prix-total').innerText = dessertPanier.totalPrice.toFixed(2);

  } else {
    supprimerDessertPanier(dessertPanier, tabdessert, carteDessert, btnChangerQuantite, btnAjoutAuPanier)
  }
};

function supprimerDessertPanier(dessertPanier, tabdessert, carteDessert, btnChangerQuantite, btnAjoutAuPanier) {

  panier = panier.filter(dessert => dessert != dessertPanier);
  contenantPanier.removeChild(tabdessert);

  //Retour a l'affichage initital
  carteDessert.querySelector('.blockimage').removeChild(btnChangerQuantite);
  carteDessert.querySelector('.blockimage').appendChild(btnAjoutAuPanier);
  carteDessert.querySelector('.imagedessert').classList.remove('imageactive');

  if (panier.length === 0) {
    const totalSection = document.querySelector('.total-section');
    document.querySelector('.order-recap-section').removeChild(totalSection);
    const panierVide = document.createElement('div');
    panierVide.classList = 'emptyimage';
    panierVide.innerHTML = contenuPanierVide;
    contenantPanier.appendChild(panierVide);
  }
};
let qttDessert = 0;
let prixTotal = 0;

function calculTotaux() {
  qttDessert = 0;
  prixTotal = 0;
  panier.forEach(dessert => {
    qttDessert += dessert.quantite;
    prixTotal += dessert.totalPrice;
  });
  document.querySelector('.cartheader').innerText = `Your Cart(${qttDessert})`;
  document.querySelector('.order-total').innerText = `$ ${prixTotal.toFixed(2)}`;
}

