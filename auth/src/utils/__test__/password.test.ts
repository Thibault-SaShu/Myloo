import Password from "../password";
import {equal} from "assert";

it("hash a password", async () => {
    const password = 'aslkdfjalskdfj'
    const hashedPassword = await Password.toHash(password)

    expect(typeof hashedPassword).toBe("string")
    expect(hashedPassword.indexOf('.')).toEqual(128)
    expect (hashedPassword.length).toEqual(145)
})

it("compare sent password with the hash in the DB and return true when they are similar", async()=>{
    const password = 'aslkdfjalskdfj'
    const hashedPassword = await Password.toHash(password)

    expect(await Password.compare(hashedPassword, password)).toBe(true)
})

it("compare sent password with the hash in the DB and return false when they are not similar", async()=>{
    const password = 'aslkdfjalskdfj'
    const hashedPassword = await Password.toHash(password)

    expect(await Password.compare(hashedPassword, "123456789")).toBe(false)
})
