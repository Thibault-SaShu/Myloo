const  mainApiUrl = "http://myloo.sa-shu.com/api/"

export const signup = async ( data = {}) =>{
    try {

        return await fetch(`${mainApiUrl}users/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    } catch(e){
        throw e
    }
}


export const postCompany = async (jwt, data = {}) =>{

    try {
         await fetch(`${mainApiUrl}company`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'cookie': `session=${jwt}; HttpOnly; Expires=session`,
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });

    } catch(e){
        throw e
    }
}