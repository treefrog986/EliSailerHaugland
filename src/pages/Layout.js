import { Drawer, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({children}){
    const router = useRouter()
    return(<div style={{backgroundColor:"white"}}>
        <Drawer
        variant="permanent"
        anchor="left"
        sx={{width:200}}
        >
            <List>
            <ListItem>
                    <ListItemButton onClick={()=>router.push("/")}>Home</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={()=>router.push("email")}>Email</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={()=>router.push("articles")}>Articles</ListItemButton>
                </ListItem>
            </List>
        </Drawer>

        <div style={{paddingLeft:150}}>
        {children}
        </div>
        </div>)
}