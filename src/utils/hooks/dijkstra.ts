import { Graph } from "types/";

const INFINITY = Number.MAX_SAFE_INTEGER;

function dijkstra(graph: Graph, start: string): { [key: string]: string } {
    // グラフの頂点数を取得
    const nodes = Object.keys(graph);

    // startから各頂点までの距離を格納する配列を作成し、全ての距離を無限大に初期化
    const distances: { [key: string]: number } = {};
    nodes.forEach(node => {
        distances[node] = INFINITY;
    });
    distances[start] = 0;

    // startからの最短距離を持つ頂点を格納する配列
    const shortestPath: { [key: string]: string } = {};

    // 確定したノードの集合
    const visited: { [key: string]: boolean } = {};

    let current: string | null = start;

    while (current) {
        // 選択したノードから移動可能なノードを取得
        const neighbors = graph[current];

        // 選択したノードから移動可能なノードの距離を更新
        for (const neighbor in neighbors) {
            const distance = neighbors[neighbor];
            const totalDistance = distances[current] + distance;
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                shortestPath[neighbor] = current;
            }
        }

        // 確定したノードに隣接するノードの中で、startからの距離が最小のノードを選択
        let minDistance = INFINITY;
        let nextNode: string | null = null;
        for (const node in distances) {
            if (!visited[node] && distances[node] < minDistance) {
                minDistance = distances[node];
                nextNode = node;
            }
        }

        current = nextNode;
        visited[current!] = true;
    }

    return shortestPath;
}

function getAllPaths(graph: Graph): string[][] {
    const nodes = Object.keys(graph);
    const paths: string[][] = [];
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const start = nodes[i];
            const end = nodes[j];
            const shortestPath = dijkstra(graph, start);
            let path = [end];
            let node = end;
            while (node !== start) {
                node = shortestPath[node];
                path.unshift(node);
            }
            paths.push(path);
        }
    }
    return paths;
}

export function getShortestPath(graph: { [key: string]: { [key: string]: number } }): string[] {
    const nodes = Object.keys(graph);
    const permutations = getPermutations(nodes);
    let shortestPath: string[] | null = null;
    let shortestDistance = Infinity;

    for (let i = 0; i < permutations.length; i++) {
        const path = permutations[i];
        let distance = 0;

        for (let j = 0; j < path.length - 1; j++) {
            const start = path[j];
            const end = path[j + 1];
            distance += graph[start][end];
        }

        const start = path[0];
        const end = path[path.length - 1];
        distance += graph[end][start];

        if (distance < shortestDistance) {
            shortestDistance = distance;
            shortestPath = path;
        }
    }

    return shortestPath!;
}


export function getPermutations(nodes: string[]): string[][] {
    if (nodes.length === 0) {
        return [[]];
    }
    const result: string[][] = [];

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const remainingNodes = nodes.slice(0, i).concat(nodes.slice(i + 1));
        const permutations = getPermutations(remainingNodes);

        for (let j = 0; j < permutations.length; j++) {
            const permutation = permutations[j];
            result.push([node].concat(permutation));
        }
    }

    return result;
}