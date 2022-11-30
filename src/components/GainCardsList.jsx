import SingleCard from './singleCard/SingleCard';
import Grid from './UI/grid/Grid';

function GainCardsList(props) {
  return (
    <Grid>
      {props.items.map((cObj) => (
        // generuoti SingleCard komponetus
        <SingleCard
          key={cObj.id}
          icon={cObj.icon}
          title={cObj.title}
          text={cObj.descr}
        />
      ))}
    </Grid>
  );
}
export default GainCardsList;
