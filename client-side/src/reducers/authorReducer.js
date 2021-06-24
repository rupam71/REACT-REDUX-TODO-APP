export default function (state = [] , action) {
      switch(action.type) {
          case 'GETAUTHOR' : return action.payload
          default : return state;
      }
  }