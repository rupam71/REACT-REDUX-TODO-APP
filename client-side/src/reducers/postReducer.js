export default function (state = [] , action) {
    //  console.log(action)
      switch(action.type) {
          case 'ALLPOST' : return action.payload
          default : return state;
      }
  }