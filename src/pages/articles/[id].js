import { useRouter } from "next/router"
import { Button } from "@mui/material"
import { articles } from "./articles"
import Styles from "../../styles/Styles.module.css"
export default function Article({res}){
    const router = useRouter()

    return(<div style={{marginLeft:"20%"}}>
    <button className={Styles.button} onClick={()=>router.push("/articles")}>Back</button>
    <h1>{res.title}</h1>
    <p style={{marginLeft:20, width:"65%"}} dangerouslySetInnerHTML={{__html:res.text}}/>

    </div>)
}

export async function getStaticPaths(){
    return {
        paths:[...Object.keys(articles).map(k=>({params:{id:`${k}`}}))],
        fallback:false}
    
}

export async function getStaticProps({params}){
return{
    props:{res:articles[params.id]}
}
}