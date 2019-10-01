import {START,FAIL,GET_USER,GET_USERS,ADD_USER,DELETE_USER,UPDATE_USER,UPDATE_FORM,POP_FORM} from '../actions/actions';

const initialState = {
  isLoading: false,
  error: '',
  users:[
    {
      name:'',
      bio:'',
      id:0,
    },
  ],
  user:{

  },
  form:{

  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START:
      return {
        ...state,
        isLoading:true,
        error:''
      };
    case FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
      case GET_USERS:
      return{
        ...state,
        isLoading: false,
        error: '',
        users: action.payload

      }
      case ADD_USER:
      return{
        ...state,
        isLoading: false,
        error: '',
        users: [
          ...state.users,
          action.payload
        ]
      }
      case DELETE_USER:
      return{
        ...state,
        isLoading: false,
        error: '',
        users: state.users.filter(user=>user.id===action.payload)

      }
      case UPDATE_USER:
      return{
        ...state,
        isLoading: false,
        error: '',
        users: state.users.map(user=>{
          if(user.id===action.payload.id){
            return action.payload;
          }else{
            return user;
          }
        })
      }
      case UPDATE_FORM:
      return{
        ...state,
        isLoading: false,
        error: '',
        form: {
          ...state.form,
          [action.payload.key]:action.payload.value
        }
      }
      case POP_FORM:
      return{
        ...state,
        isLoading: false,
        error: '',
        form: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}
export default reducer;