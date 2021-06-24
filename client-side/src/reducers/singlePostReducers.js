export default function (state = [] , action) {
    //  console.log(action)
      switch(action.type) {
          case 'SINGLEPOST' : return action.payload
          default : return state;
      }
  }