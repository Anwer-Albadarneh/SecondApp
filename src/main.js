import data from './data.json';
import Cardcomp from './card';

function Main(){
    return(
        <>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"20px", marginTop:"3%"}}>
        {data.map(function(Food){
            return(
                <Cardcomp image={Food.image_url} title={Food.title} description={Food.description}/>
           ) 
        }
            )
           }
        </div>

        </>
    )
}
export default Main;
