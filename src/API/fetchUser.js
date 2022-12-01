
export const fetchUser = async(urlUser) =>{
    try{
        const response = await fetch(urlUser)
        /* console.log('fetchUser'); */
        return await response.json()
    }catch (error){
        console.log('something wrong')
    }
}


