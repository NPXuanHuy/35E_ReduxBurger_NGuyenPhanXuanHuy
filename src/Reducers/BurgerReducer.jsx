const burgerState = {
  burger: { salad: 0 , cheese: 0, beef: 0 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 55,
  },
  total: 0,
};

export const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case "TANG_GIAM_SO_LUONG": {
        console.log(action);
      let { propBurger, amount } = action;
      //Thay doi so luong
      if (state.burger[propBurger] < 1 && amount === -1) {
        return { ...state };
      }

      let newBurger = {...state.burger};

      newBurger[propBurger] += amount;
      
      state.burger = newBurger
      
      //Total
      state.total += amount * state.menu[propBurger]
      
      return {...state}
    }
    default:
      return state;
  }
};
