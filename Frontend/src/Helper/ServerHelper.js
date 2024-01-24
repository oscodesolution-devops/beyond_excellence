export const makeUnauthenticatedPOSTRequest = async (route, body) => {
  try {
    const response = await fetch(route, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      // the body will send like this to backend
      body: JSON.stringify(body),
    });

    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};

export const makeUnauthenticatedGETRequest = async (route) => {
  try {
    const response = await fetch(route, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
  } catch (error) {
    console.log(`error in fetch api `, error);
  }
};


export const makeAuthenticatedGETRequest = async (token , route) => {
  const response = await fetch(route , {
    method : 'GET' ,
    headers : {
      'Authorization': `bearer ${token}`
    },
  

  });
   const formattedResponse = await response.json();
    const status = response.status;
    const data = {data:formattedResponse,status:status}
    return data;
}