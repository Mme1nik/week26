import { supers } from "./json";
import './hero.css';

const Hero = ({index, picture}) => {
    const heroes = JSON.parse(supers);
    console.log(heroes);
    const image = {
        backgroundImage: 'url(' + heroes[index].picture + ')'
    };
    return (
        <div className="hero" style={image}>
            <div className="back">
                <p><strong>Вселенная: </strong>{heroes[index].universe}</p>
                <p><strong>Альтер эго: </strong>{heroes[index].ego}</p>
                <p><strong>Род деятельности: </strong>{heroes[index].work}</p>
                <p><strong>Друзья: </strong>{heroes[index].friends}</p>
                <p><strong>Суперсилы: </strong>{heroes[index].power}</p>
                <p><strong>Подробнее: </strong>{heroes[index].more}</p>
            </div>
        </div>
    )
};

export default Hero;

<div>
    
</div>