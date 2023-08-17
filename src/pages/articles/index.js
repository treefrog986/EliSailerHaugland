import { Button, ButtonBase, Grid, Item , Card, CardActionArea} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Articles({ids}){
    const route = useRouter()

    return (<>
    <p>Blogd</p>
    <Grid container>
        {ids.map(k=>
  //      <Button>
            <Grid item xs={4} key={k.id}>
                <Card sx={{width:"90%", marginBottom:2}} >
                    <CardActionArea onClick={()=>route.push(`/articles/${k.id}`)}>
                   <h1>{k.name}</h1>
                   </CardActionArea>
                </Card>
                </Grid>
           // </Button>
            )}
            </Grid>
    </>
    )
    return (<>
    {ids?.map(k=>
    
    <Button key = {k.id} onClick={()=> route.push(`/articles/${k.id}`)}>{k.name}</Button>)}
    
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