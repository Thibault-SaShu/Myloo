import {postCompany, signup} from './fetch.js'

const populate = async()=>{
    const signupRes = await signup({
        "email":"paul@email.cz",
        "password":"123456789"
    })

    const jwt = signupRes.headers
        .getSetCookie()[0]
        .split("=")[1]
        .split(";")[0]
    console.log(jwt)


    await postCompany(jwt, {
        "name": "Sa-Shu",
        "phone": [
            "+420 000 000 000",
            "+33 2 00 00 00 00"
        ],
        "address":[
            "Jeremenkova 763/88",
            "Podolí"
        ],
        "zip": "14 000",
        "city" : "Praha",
        "state" : "Česká Republika",
        "ico": "00000000",
        "dic": "CZ00000000",
        "account": "0000000000/0000",
        "iban": "0000000000000000",
        "bic": "000000000000"
    })


}

populate().then(()=>{
    console.log("Myloo populated :-)")
}) .catch(()=>{
    console.log("Error : Can't populate Myloo")
    }
)