import { getMenu } from "../../../../api/product";
import { getLocalStorage, setLocalStorage } from "../../../../utils/window";
import { findObjectById } from "../../../../utils/array";


/**
 * 
 On a besoin du menu pour filtrer le panier. On ne peut pas le relire depuis le state juste après setMenu, 
 car un setState ne met pas à jour la variable immédiatement : la nouvelle valeur n’arrive 
 qu’au rendu suivant. La fonction renvoie donc directement la valeur qu’elle a reçue, 
 c’est un piège classique de React
 */
const intialiseMenu = async (username, setMenu) => {
  const menuReceived = await getMenu(username);
  setMenu(menuReceived);
  return menuReceived;
};

const intialiseBasket = (username, menu, setBasket) => {
  const basketReceived = getLocalStorage(username); // localStorage est synchrone, pas besoin de "await".

  if (!basketReceived || !menu) return;

  // if (basketReceived) setBasket(basketReceived)
  // Le menu est géré par le back-office : un produit présent dans un ancien panier
  // a pu être supprimé depuis. On ne garde que les produits qui existent encore dans le menu.
  const basketWithExistingProducts = basketReceived.filter((basketProduct) =>
    findObjectById(basketProduct.id, menu),
  );

  setBasket(basketWithExistingProducts);
  setLocalStorage(username, basketWithExistingProducts);
};

export const initialiseUserSession = async (username, setMenu, setBasket) => {
  const menu = await intialiseMenu(username, setMenu);
  intialiseBasket(username, menu, setBasket);
};


// Le menu est lu une seule fois, au chargement de la page. Il ne change pas pendant la session, donc le panier ne peut pas redevenir incohérent après ce nettoyage. 
// Si un jour on ajoute la mise à jour en temps réel, il faudra revoir cette logique.