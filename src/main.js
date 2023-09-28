import data from './data.json';
import Cardcomp from './card';
import './card.css';

function Main(){
    return(
        <>
        <div id='design'>
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
