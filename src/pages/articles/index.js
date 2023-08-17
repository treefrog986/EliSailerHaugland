import { Button } from "@mui/material";
import { useRouter } from "next/router";


export default function Articles({ids}){
    const route = useRouter()
    return (<>
    {ids.map(k=><Button key = {k.id} onClick={()=> route.push(`/articles/${k.id}`)}>{k.name}</Button>)}
    
    </>)
}

export async function getStaticProps(){
    const res = await fetch(process.env.URL+"/api/blogs",{
        method:"GET"
    })
    const data = await res.json()
    console.log(data.rows)
    return{
        props: {
            ids: data.rows
        }
    }
}