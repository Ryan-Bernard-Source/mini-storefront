import Catalog from './components/Catalog';

export default function Page(){
  return(
    <main className="p-0">
      <h1 className="text-2xl font-bold">Welcome to the store.</h1>
      <Catalog />
    </main>
  );
}
