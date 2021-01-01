import Layout from "../components/Layout";

export default function Home() {
  const input = "Charipay Interview Boilerplate";

  const myFunction = (i) => {
    return i;
  };

  return <h1>{myFunction(input)}</h1>;
}
