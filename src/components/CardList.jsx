import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robot, i) => (
        <Card
          key={robot.id || robot.username || i}
          name={robot.name}
          id={robot.id}
          username={robot.username}
          email={robot.email}
        />
      ))}
    </>
  );
};

export default CardList;
