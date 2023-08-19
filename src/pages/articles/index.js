import { Button, ButtonBase, Grid, Item , Card, CardActionArea} from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Articles({ids}){
    const route = useRouter()

    return (<>
    <p style={{fontSize:"2em", color:"blue"}}><u>Blogs</u></p>
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
}

export async function getStaticProps(){
    const res = await fetch(process.env.URL+"/api/blogs",{
        method:"GET"
    })
    const data = await res.json()
    return{
        props: {
            ids: data.rows
        }
    }
}