import { Button } from "@mui/material";
import { useRouter } from "next/router";
import articles  from "./articles";

export default function Articles({res}){
    const route = useRouter()
    return (<>
    {Object.keys(articles).map(k=>
    <Button key = {k} onClick={()=> route.push(`/articles/${k}`)}>{articles[k].title}</Button>)}

    </>)
}
