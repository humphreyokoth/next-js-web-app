import { articles } from "../../../data";
import article from "../../article/[id]";

export default function handler({query:{id}},res){
const filetered = articles.filter(article => article.id === id)

if(filetered.length>0){
res.status(200).json(filetered[0])

}else{
    res
        .status(404)
        .json({message:`Article with the id of${id}is not found `})
}

}