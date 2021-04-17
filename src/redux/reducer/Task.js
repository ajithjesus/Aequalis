import { USER_LOGIN,TASK_ARRAY } from "../action/Task";


const initialState = {
  cartproducts: [],
  message:'',
  token:'',
  taskarray:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
        {
            return{
                token:action.token,
            };
        } 
        case TASK_ARRAY:
            {
                return{
                    taskarray:action.taskarray,
                };
            } 



    
  }

  return state;
};
