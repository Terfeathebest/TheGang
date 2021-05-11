export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const firebase = getFirebase();
      firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((resp) => {
          return firestore.collection("users").doc(resp.user.uid).set({
            userName: newUser.userName,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            signUpAsAdult:true,
            contact: newUser.contact,
            address: newUser.address,
            city: newUser.city,
            postcode: newUser.postcode,
            email: newUser.email,
            password: newUser.password,
            image: newUser.imageUrl,
            initials: newUser.firstName[0].newUser.lastName[0],
            createdAt: new Date(),
            userId: resp.user.uid,
          });
        })
        .then(() => {
          dispatch({ type: "SIGNUP_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "SIGNUP_ERROR", err });
        });
    };
  };

  export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
          dispatch({ type: "LOGIN_SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "LOGIN_ERROR", err });
        });
    };
  };
  
  export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: "SIGNOUT_SUCCESS" });
        });
    };
  };