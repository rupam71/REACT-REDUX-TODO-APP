export default function (state = [] , action) {
    //  console.log(action)
      switch(action.type) {
          case 'GETAUTHOR' : return action.payload
          default : return state;
      }
  }