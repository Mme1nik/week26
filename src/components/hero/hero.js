import './hero.css';

const Hero = ({universe, picture, ego, work, friends, power, more}) => {
    const image = {
        backgroundImage: 'url(' + picture + ')'
    };
    return (
        <div className="hero" style={image}>
            <div className="back">
                <p><strong>Вселенная: </strong>{universe}</p>
                <p><strong>Альтер эго: </strong>{ego}</p>
                <p><strong>Род деятельности: </strong>{work}</p>
                <p><strong>Друзья: </strong>{friends}</p>
                <p><strong>Суперсилы: </strong>{power}</p>
                <p><strong>Подробнее: </strong>{more}</p>
            </div>
        </div>
    )
};

export default Hero;

<div>
    
</div>