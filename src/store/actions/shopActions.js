export const shopCreate = (store) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const firebase = getFirebase();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp) => {
          return firestore.collection("shop").doc(resp.user.uid).set({
            nameOfProduct: store.name,
            priceOfProduct: store.price,
            quantity: store.quantity,
            userId: resp.user.uid,
          });
        })
        .then(() => {
          dispatch({ type: "SHOP_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "SHOP_ERROR", err });
        });
    };
  };

  export const shopDelete = (store) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const firebase = getFirebase();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp) => {
          return firestore.collection("shop").doc(resp.user.uid).set({
            nameOfProduct: store.name,
            priceOfProduct: store.price,
            quantity: store.quantity,
            userId: resp.user.uid,
          });
        })
        .then(() => {
          dispatch({ type: "SHOP_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "SHOP_ERROR", err });
        });
    };
  };

  