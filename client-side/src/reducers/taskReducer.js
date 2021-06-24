export default function (state = [] , action) { 
      switch(action.type) {
          case 'NEWTASK' : return [...state, action.payload] 
          case 'CLEARTASK' : return action.payload
          default : return state;
      }
  }