import Layout from "../../components/Layout";

function HomePage() {
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <div className="flex-grow flex gap-4 mb-4">
          <div className="w-2/3 bg-white border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">Albums</h2>
            {/* Conteúdo dos álbuns será adicionado*/}
          </div>
          <div className="w-1/3 bg-white border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold mb-2">Posts</h2>
            {/* Conteúdo dos posts será adicionado */}
          </div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Todos</h2>
          {/* Conteúdo dos todos será adicionado */}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;