import Title from "./title";
import List from "./List";

function Practica2() {

  const clickLike = () => {
    console.log(`Like`);
  };

  return (
    <div>
      <h1>Interstellar</h1>
      <p>
        Interstellar (conocida como Interestelar en Hispanoamérica) es una
        película épica de drama y ciencia ficción británico-estadounidense y
        canadiense de 2014, dirigida por Christopher Nolan y protagonizada por
        Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine y
        Matt Damon. Ambientada en un futuro distópico donde la humanidad está
        luchando por sobrevivir, cuenta la historia de un grupo de astronautas
        que viajan a través de un agujero de gusano cerca de Saturno en busca de
        un nuevo hogar para la humanidad.
      </p>
      <button onClick={clickLike}>Like</button>
      <Title title='Generos:' />
      <List>
        <li>Drama</li>
        <li>Ciencia Ficcion</li>
      </List>
      <Title title='Actores:' />
      <List>
        <li>Matthew McConaughey</li>
        <li>Anne Hathaway</li>
        <li>Jessica Chastain</li>
        <li>Bill Irwin</li>
        <li>Ellen Burstyn</li>
        <li>Michael Caine</li>
        <li>Matt Damon</li>
      </List>
    </div>
  );
}

export default Practica2