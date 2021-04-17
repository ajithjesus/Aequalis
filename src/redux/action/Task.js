export const USER_LOGIN="USER_LOGIN";
export const TASK_ARRAY="TASK_ARRAY";




export const userlogin=()=>
{
    return (dispatch) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email : 'spicebluetest2@gmail.com',password : '12345678' })
        };
        fetch('https://stage.api.sloovi.com/login', requestOptions)
            .then(response => response.json())
            .then(data =>
                
                
                dispatch({ type: "USER_LOGIN", token:data.results.token}
                ));
              
            
    }
       
}

export const getUser=(tokens_id)=>
{
    return (dispatch) => {
       
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + tokens_id,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch("https://stage.api.sloovi.com/user", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(JSON.stringify(data)));
  };



    
}


export const getTask=(tokens_id)=>
{
    return (dispatch) => {
       
        const requestOptions = {
            method: "GET",
            headers: {
              Authorization: "Bearer " + tokens_id,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          };
          fetch(
            "https://stage.api.sloovi.com/task/lead_04412ba1d622466cab1f0ad941fcf303",
            requestOptions
          )
            .then((response) => response.json())
      
            .then((data) => {
                alert('wlring')
                dispatch({ type: "TASK_ARRAY", taskarray: data.results});
        }
            )
    }
    
}





