import { NextPage } from 'next'
import { Graph } from 'types/';
import { getShortestPath } from 'utils/hooks/dijkstra';

const Home: NextPage = () => {

  // グラフの定義
  const graph: Graph = {
    A: { B: 5, C: 1, D: 6, E: 8, F: 4 },
    B: { A: 5, C: 2, D: 1, E: 5, F: 7 },
    C: { A: 1, B: 2, D: 4, E: 8, F: 3 },
    D: { A: 6, B: 1, C: 4, E: 3, F: 9 },
    E: { A: 8, B: 5, C: 8, D: 3, F: 2 },
    F: { A: 4, B: 7, C: 3, D: 9, E: 2 }
  };

  // 実行例
  const a = getShortestPath(graph);
  console.log(a); // { A: 0, B: 5, C: 1, D: 6, E: 9, F: 4 }
  // console.log(previous); // { A: null, B: 'A', C: 'A', D: 'A', E: 'C', F: 'A' }






  return (
    <>
      <div>
      </div>
    </>
  )
}

export default Home
