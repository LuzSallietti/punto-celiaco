import AnchorBtn from "../components/AnchorBtn";

const Home = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <h1>Punto celíaco</h1>
      <h2>Home</h2>
      <br></br>
      <AnchorBtn path="/puntos/crear" text="Crear un punto" />
    </div>
  );
};

export default Home;
