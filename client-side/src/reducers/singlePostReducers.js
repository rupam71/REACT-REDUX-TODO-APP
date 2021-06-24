export default function (state = [] , action) { 
      switch(action.type) {
          case 'SINGLEPOST' : return action.payload
          default : return state;
      }
  }