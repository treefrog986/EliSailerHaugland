import { useRouter } from "next/router"
import { Button } from "@mui/material"
import Styles from "../../styles/Styles.module.css"
import { useEffect } from "react"
export default function Article({res}){
    const router = useRouter()
    return(<div style={{marginLeft:"20%"}}>
    <button className={Styles.button} onClick={()=>router.push("/articles")}>Back</button>
    <h1>{res.name}</h1>
    <p style={{marginLeft:20, width:"65%"}} dangerouslySetInnerHTML={{__html:res.text}}/>

    </div>)
}

export async function getStaticPaths(){
   return []
    const res = await fetch(process.env.URL+"/api/blogs",{
        method:"GET"
    })
    const data = await res.json()
    return {
        paths:[...data.rows.map(k=>({params:{id:`${k.id}`}}))],
        fallback:false}
}

export async function getStaticProps({params}){
    return {props:{}}
    const res = await fetch(process.env.URL+`/api/blogs/${params.id}`,{
        method:"GET"
    })
    const data = await res.json()
return{
    props:{res: data.rows[0]}
}
}