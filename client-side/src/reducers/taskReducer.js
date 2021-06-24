export default function (state = [] , action) {
    //  console.log(action)
      switch(action.type) {
          case 'NEWTASK' : return [...state, action.payload] 
          case 'CLEARTASK' : return action.payload
          default : return state;
      }
  }