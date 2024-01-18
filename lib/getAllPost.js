export default async function getAllPost(){
        const result = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        if(!result.ok)
        {
            throw new Error("data fatching issue")
        }
        return result.json()

}