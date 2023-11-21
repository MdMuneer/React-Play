import s from "./Rating.module.css";

export function Rating() {
  const buttonValues = [1, 2, 3, 4, 5];
  return (
    <div className={s.panel}>
      <span>How did we do ?</span>
      <p> please let us know and rate us !!</p>
      <div>
        {buttonValues.map((value, index) => (
          <button className={s.rateBtn} key={index}>{value}</button>
        ))}
      </div>
      <button>Submit</button>
    </div>
  );
}
