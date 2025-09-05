const colorsArray = ["Червоний", "Синій", "Зелений"];
export const ColorsInArray = () => {
  colorsArray.map((element, index) => {
    console.log(element);
    console.log(index);
  });
  return (
    <ul>
      {colorsArray.map((color, index) => (
        <li key={index}>{color}</li>
      ))}
    </ul>
  );
};
