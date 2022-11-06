import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import "./styles.css";

const App = () => {
  return (
    <MultiRangeSlider
      min={0}
      max={1000}
      onChange={({ min, max }: { min: number; max: number }) =>
        console.log(`min = ${min}, max = ${max}`)
      }
    />
  );
};

export default App;
