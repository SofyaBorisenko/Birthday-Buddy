const Pet = ({ image, name, breed, age }) => {
  return (
    <article className="pet">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <h5>{breed}</h5>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Pet;
