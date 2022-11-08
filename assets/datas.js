const jsonDatas = {
    P1C2_SC: {
        h: "Transformez un simple fichier HTML en app React"
        , p: `Exploitez les liens CDN`
        , liens: [""]
        , copypaste: ""
        , begin: ""
        , sol: "https://codepen.io/nicolaspatschkowski/pen/wvzQevq"
        , tasks: {
            p: ``
            , ol: [
                `
                  ....TODOList tasks....
                `
            ]
        }
    },
    P1C2: {
        h: "Créez votre premier composant"
        , p: `Attachez React à votre HTML`
        , liens: [""]
        , copypaste: ""
        , begin: "https://codepen.io/nicolaspatschkowski/pen/ExgrqLV"
        , sol: ["https://codepen.io/nicolaspatschkowski/pen/vYXVqod", "https://codepen.io/nicolaspatschkowski/pen/gOwQRbm"]
        , tasks: {
            p: `Je vous avais parlé au chapitre précédent d'un exercice fil rouge qui nous accompagnerait tout au long de ce cours. Vous vous en souvenez ? Nous allons créer ensemble un site pour un magasin de plantes, La maison jungle ! 

            Il est temps de mettre en pratique ce que vous venez de voir.
            Votre mission, si vous l'acceptez, est la suivante :`
            , ol: [
                `Créer le premier composant Header qui contient le nom de notre magasin : La maison jungle. Le composant Header correspond à une balise h1  .`
                , `L'intégrer dans un élément HTML qui aura pour id "root".`
            ]
        }
    },
    P1C3: {
        h: "Initiez-vous au JSX"
        , p: [`Composez vos composants`, "Manipulez des données dans vos composants JSX"]
        , liens: [""]
        , copypaste: ""
        , begin: "https://codepen.io/nicolaspatschkowski/pen/JjRmgdJ"
        , sol: "https://codepen.io/nicolaspatschkowski/pen/MWjPNaa"
        , tasks: {
            p: `Vous avez appris plein de choses dans ce chapitre, bravo ! C'est maintenant l'occasion de les mettre en pratique.`
            , ol: [
                `Réutiliser le composant Banner de ce chapitre qui présente le nom de notre boutique. Vous devez sortir le titre dans une variable JavaScript : le titre doit initialement être en minuscules et être transformé en majuscules avec du JavaScript.`
                , `Créer un composant <Cart /> (panier) qui viendra sous notre titre.`
                , `Le panier contient 3 plantes : un monstera, un lierre et un bouquet de fleurs.`
                , `Créer 3 variables pour les prix des plantes : le monstera coûte 8, le lierre coûte 10, et le bouquet de fleurs coûte 15.`
                , `Le panier contient une liste (<ul> 😉), et chaque élément présente le nom de l'article, et le prix.`
                , `Le total du panier additionne les trois prix.`
            ]
        }
    },
    P2C1: {
        h: "Organisez votre code"
        , p: ``
        , liens: [""]
        , copypaste: ""
        , begin: "https://codepen.io/atoulmet/pen/YzWMvWP"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C1-Solution"
        , tasks: {
            p: `Vous pouvez commencer l’exercice à partir de la base de code que nous avons créée ensemble avec Create React App.
            Votre mission est la suivante : importer le composant Cart que vous aviez créé dans l’exercice du chapitre précédent dans un fichier à part, dans le dossier /components.`
            , ol: [
                ``
            ]
        }
    },
    P2C2: {
        h: "Incorporez du style et des assets à votre projet"
        , p: `Découvrez l'attribut style`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C2-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C2-Solution"
        , tasks: {
            p: `Ici, vous allez devoir styliser votre panier. Pour ça, créez d’abord une classe  lmj-cart. Votre panier doit avoir :`
            , ol: [
                `un padding de 32 px ;`
                , `du texte blanc ;`
                , `et un background-color à #31b572.`
            ]
        }
    },
    P2C3_1: {
        h: "Itérez sur votre contenu"
        , p: `Découvrez votre allié :  map(); et Précisez votre key`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Begin-1"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Solution-1"
        , tasks: {
            p: `Vous verrez dans  ShoppingList.js   une liste de plantes importée depuis  /datas   qui s'appelle  plantList, et qui comporte des catégories pour chacune des plantes.
            À partir de cette liste de plantes, vous devrez :`
            , ol: [
                `Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes (que nous utiliserons également plus tard). `
                , `Il existe plusieurs solutions pour créer une liste d'éléments uniques, mais je vous conseille de vous pencher sur la méthode reduce()  ou bienforEach().`
                , `Afficher la liste des catégories de plantes au-dessus de la liste des plantes à vendre.`
            ]
        }
    },
    P2C3_2: {
        h: "Contextualisez le contenu de vos composants"
        , p: `Créez des conditions dans le JSX; et Ouvrez-vous à d'autres méthodes`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Begin-2"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Solution-2"
        , tasks: {
            p: `J'en ai profité pour rajouter un peu de CSS dans  ShoppingList.css, afin qu'on y voie un peu plus clair. ✨
            <br/>J'ai également ajouté une variable  isSpecialOffer   à  true   pour les plantes qui sont en promotion. Votre mission est d'afficher un élément  div  qui contient le mot “Soldes” si la plante est en promotion. Vous pouvez lui passer la classe  lmj-sales  pour lui ajouter du style.
            <br/>Vous êtes libre de choisir l’une des méthodes vues dans le chapitre pour créer votre affichage conditionnel.`
            , ol: []
        }
    },
    P2C3_SC: {
        h: "Ouvrez-vous à d'autres méthodes"
        , p: `React est particulièrement flexible : il existe d'autres méthodes permettant de contextualiser votre contenu. Je vais vous en montrer quelques-unes dans le screencast ci-dessous :`
        , liens: ["https://player.vimeo.com/video/503077386?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Screencast"
        , sol: ""
        , tasks: {
            p: ``
            , ol: []
        }
    },
    P2C3_EX: {
        h: "Créez des conditions dans le JSX"
        , p: `Donc… Nous avons déjà vu le ternaire. Maintenant qu'on a une app complète pour nous faire la main, moi, ça me donne envie de le mettre en application dans notre site de plantes. 🤓
        Dans notre liste de plantes  plantList.js, je vais rajouter une catégorie  isBestSale   correspondant à un  booléen   qui nous indique si notre plante fait partie des meilleures ventes. Ce qui nous donne pour le premier élément :`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C3-Exercice-conditions"
        , sol: ""
        , tasks: {
            p: `Maintenant que nous avons notre booléen, nous allons utiliser un ternaire pour afficher un emoji en fonction. Dans  ShoppingList.js, au niveau de l'affichage du nom, je rajoute :`
            , ol: [
                `{
                    name: 'monstera',
                    category: 'classique',
                    id: '1ed',
                    isBestSale: true
                },`
                , `{plantList.map((plant) => (
                    <li key={ plant.id }>
                        {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                    </li>
                ))}`
                , `../../assets/P2C3_EX.png`
            ]
        }
    },
    P2C4: {
        h: "Réutilisez vos composants avec les props"
        , p: `Vous allez créer un composant PlantItem qui sera un composant enfant de ShoppingList.`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C4-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C4-Solution"
        , tasks: {
            p: `Les props  name   et  cover   seront utilisées directement dans PlantItem.
            light   et  water, que nous avons déjà créées ensemble, seront passées au composant  CareScale   dans  PlantItem.
            Vous trouverez dans  styles/PlantItem.css   les classes CSS  lmj-plant-item-cover   et  lmj-plant-item   qui vous aideront à créer de beaux composants 🤩. Je vous propose également de remplacer nos emojis par les icônes 'sun' et 'water' que vous trouverez dans  /assets.
            <br/> PlantItem prend en props :`
            , ol: [
                `name   pour le nom de la plante ;`
                , `cover   pour l'image correspondante ;`
                , `id   qui correspond à l'item de chaque élément ;`
                , `light ;`
                , `water.`
            ]
        }
    },
    P2C4_EX: {
        h: "Familiarisez-vous avec la syntaxe"
        , p: `Et si je vous disais que vous avez déjà utilisé une prop ? Eh oui, la prop  key   dans le chapitre sur les listes ! Vous avez donc déjà vu la syntaxe.
        Revenons à notre site de plantes. Nous allons maintenant créer un nouveau composant qui va être réutilisé. L'idée est de créer une échelle d'arrosage et une échelle de luminosité pour chaque plante.`
        , liens: ["https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7135822-reutilisez-vos-composants-avec-les-props#/id/r-7135656"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C4-Exercice"
        , sol: ""
        , tasks: {
            p: [
                ``
                , ``
            ]
            , ol: [
                `
                  ....TODOList tasks....
                `
            ]
        }
    },
    P2C5: {
        h: "Interagissez avec vos composants grâce aux événements"
        , p: `Vous allez maintenant pouvoir mettre tout ça en application. Comme d'habitude, vous trouverez la base de code pour commencer l'exercice sur P2C5-Begin.`
        , liens: ["https://react-hook-form.com/"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C5-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C5-Solution"
        , tasks: {
            p: `Cette fois-ci, voilà une petite to do de ce que vous pouvez faire pour enrichir notre app :`
            , ol: [
                `Créer une alerte qui se déclenche au clic sur le composant CareScale qui devra dire :`
                , [`"Cette plante requiert peu/modérement/beaucoup de lumière/d'arrosage" en fonction de la donnée correspondante ;`
                    , `s'il s'agit d'un composant CareScale de type "water" ou de type "light".`
                ]
                , `Vous trouverez dans la base de code un nouveau composant : Footer. Vous devez y ajouter :`
                , [`un input pour récupérer le mail de l'utilisateur, en appliquant la méthode de composant contrôlé. La syntaxe du state que nous avons utilisée dans ce chapitre pour  inputValue   et  setInputValue   qui utilise useState est d'ailleurs déjà écrite dans la base de code ;`
                    , `l'événement  blur   (quand on clique en dehors du champ) qui déclenche une alerte si inputValue ne contient pas le caractère "@". Cette alerte devra préciser "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.”`
                ]
            ]
        }
    },
    P2C5_EX: {
        h: "Familiarisez-vous avec la syntaxe"
        , p: `....Préambule de l'exercice....`
        , liens: ["https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7136084-interagissez-avec-vos-composants-grace-aux-evenements#/id/r-7135875"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P2C5-Exercice"
        , sol: ""
        , tasks: {
            p: `Quelques caractéristiques de la déclaration d'un événement en React :`
            , ol: [
                `l'événement s'écrit dans une balise encamelCase;`
                , `vous déclarez l'événement à capter, et lui passez entre accolades la fonction à appeler ;`
                , `contrairement au JS, dans la quasi totalité des cas, vous n'avez pas besoin d'utiliser addEventListener`
            ]
        }
    }
    , P3C1: {
        h: "Mettez en place votre state local avec useState"
        , p: ``
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C1-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C1-Solution"
        , tasks: {
            p: `Pour ce chapitre, vous devrez créer un bouton "vider le panier" qui réinitialise le state de notre  cart.`
            , ol: []
        }
    }
    , P3C1_SC: {
        h: "????????????????????"
        , p: ``
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/blob/P3C1-Screencast/src/components/PlantItem.js"
        , sol: ""
        , tasks: {
            p: ``
            , ol: []
        }
    }
    , P3C1_EX: {
        h: "Familiarisez-vous avec useState"
        , p: `Nous allons encore améliorer notre panier. Cette fois-ci, je veux pouvoir choisir de l'afficher ou de le cacher. Pour ça, nous allons utiliser une variable d'état dans notre composant Cart.`
        , liens: ["https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7137536-mettez-en-place-votre-state-local-avec-usestate#/id/r-7137542"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/blob/P3C1-Exercices/src/components/PlantItem.js"
        , sol: ""
        , tasks: {
            p: ``
            , ol: [
                `Comprenez les crochets (en destructuring)`
                , `Créez plusieurs variables d'état`
            ]
        }
    }
    , P3C2: {
        h: "Partagez votre state entre différents composants"
        , p: `Faites remonter l'état et mettez-le à jour depuis vos composants enfants`
        , liens: [""]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C2-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C2-Solution"
        , tasks: {
            p: `L'objectif ici est de reprendre notre liste de catégories et de l'améliorer avec le state. Pour cela, voilà ce que vous allez faire :`
            , ol: [
                `Créer  un composant à part,  Categories  , pour gérer les catégories.`
                , `Afficher la liste dans  un menu déroulant <select /> avec des <options /> :`
                , `chaque catégorie devient une option. Il est possible de choisir une catégorie ;`
                , `à la sélection d'une catégorie, seules les plantes correspondant à la catégorie sélectionnée s'affichent.`
                , `Créer également un bouton ayant pour label "Réinitialiser". Ce bouton permet de réinitialiser votre state, et d'afficher toutes les catégories de plantes.`
                , `Vous pouvez ajouter une option qui a pour valeur une string vide lorsqu'aucune catégorie n'est sélectionnée.`
            ]
        }
    }
    , P3C2_SC: {
        h: "Faites remonter l'état et mettez-le à jour depuis vos composants enfants"
        , p: ``
        , liens: ["https://player.vimeo.com/video/503077394?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C2-Screencast-Begin/"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C2-Screencast-Solution/"
        , tasks: {
            p: ``
            , ol: [
                ``
            ]
        }
    }
    , P3C3: {
        h: "Déclenchez des effets avec useEffect"
        , p: `Découvrez useEffect; et Précisez quand déclencher un effet avec le tableau de dépendances`
        , liens: ["https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage", "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/stringify", "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/JSON/parse"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C3-Begin"
        , sol: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C3-Solution"
        , tasks: {
            p: `Ici, vous allez permettre à l'utilisateur de garder son panier, même lorsqu'il rafraîchit la page. Pour cela, nous allons utiliser localStorage. Afin d'assurer la meilleure expérience utilisateur possible, vous devez : `
            , ol: [
                `sauvegarder le panier à chaque modification avec  localStorage.setItem()  . Attention, le cart étant maintenant un objet, il vous faudra passer par  JSON.stringify   (vous avez la documentation ici) puis  JSON.parse   (et à nouveau la doc ici) ;`
                , `vous assurer que le panier n'est pas sauvegardé plus de fois que nécessaire ;`
                , `récupérer le panier au premier chargement de la page avec  localStorage.getItem.`
            ]
        }
    }
    , P3C3_SC: {
        h: "Maîtrisez les règles de useEffect"
        , p: `Intégrez les différentes étapes de useEffect`
        , liens: ["https://player.vimeo.com/video/503077429?color=7451eb"]
        , copypaste: ""
        , begin: "https://github.com/atoulmet/atoulmet-OC-React-Beginners/tree/P3C3-Screencast-Begin"
        , sol: ""
        , tasks: {
            p: `Repassons sur ce qu’on vient de voir de useEffect et d’autres utilisations dans cette vidéo !`
            , ol: []
        }
    }
}