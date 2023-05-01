import SearchForm from '../components/SearchForm';
import CategoriesFilter from "../components/CategoriesFilter";
import FeaturedPoints from "../components/FeaturedPoints";


const Home = () => {  

  return (
    <section className="mx-auto w-full md:w-10/12 lg:w-7/12 px-4 pt-8 pb-32">
      <h1 className="text-2xl font-medium text-center">Encontrá los mejores lugares para comer sin gluten.</h1>
      <SearchForm/>
      <CategoriesFilter/>
      <FeaturedPoints/>            
    </section>
  );
};

export default Home;
