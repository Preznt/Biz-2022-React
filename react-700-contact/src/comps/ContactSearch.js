import { useLoaderData } from "react-router-dom";

const ContactSearch = () => {
  const { hello } = useLoaderData();
  return (
    <form>
      <input placeholder="검색" />
      <button>+</button>
      <h1>{hello}</h1>
    </form>
  );
};

export default ContactSearch;
