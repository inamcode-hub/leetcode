// ─── WARMUP 19 — GRAPHS & MATRIX (Navigate Any Structure) ───
// Graphs = nodes + edges. A grid/matrix IS a graph (each cell connects to neighbors).
// DFS and BFS work on both. Learn the templates here.

// ╔═══════════════════════════════════╗
// ║  GRID / MATRIX TRAVERSAL          ║
// ╚═══════════════════════════════════╝

// The 4 directions — you'll use this in almost every grid problem
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // down, up, right, left

// Helper: check if position is valid
function inBounds(grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}

// 1. NUMBER OF ISLANDS — DFS on a grid
function numIslands(grid) {
  let count = 0;

  function dfs(r, c) {
    if (!inBounds(grid, r, c) || grid[r][c] === "0") return;
    grid[r][c] = "0"; // mark visited (sink the island)

    for (const [dr, dc] of DIRS) {
      dfs(r + dr, c + dc);
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

console.log("islands:", numIslands([
  ["1", "1", "0", "0"],
  ["1", "0", "0", "0"],
  ["0", "0", "1", "1"],
])); // 2

// 2. FLOOD FILL — change color of connected region (like paint bucket)
function floodFill(image, sr, sc, color) {
  const original = image[sr][sc];
  if (original === color) return image; // already the target color

  function dfs(r, c) {
    if (!inBounds(image, r, c) || image[r][c] !== original) return;
    image[r][c] = color;
    for (const [dr, dc] of DIRS) {
      dfs(r + dr, c + dc);
    }
  }

  dfs(sr, sc);
  return image;
}

const img = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log("flood fill:", floodFill(img, 1, 1, 2));
// [[2,2,2],[2,2,0],[2,0,1]]

// 3. BFS ON GRID — shortest path (BFS always finds shortest in unweighted graph)
function shortestPath(grid, start, end) {
  const queue = [[...start, 0]]; // [row, col, distance]
  const visited = new Set();
  visited.add(start.join(","));

  while (queue.length) {
    const [r, c, dist] = queue.shift();

    if (r === end[0] && c === end[1]) return dist;

    for (const [dr, dc] of DIRS) {
      const nr = r + dr;
      const nc = c + dc;
      const key = `${nr},${nc}`;

      if (inBounds(grid, nr, nc) && grid[nr][nc] === 0 && !visited.has(key)) {
        visited.add(key);
        queue.push([nr, nc, dist + 1]);
      }
    }
  }
  return -1; // no path
}

console.log("shortest:", shortestPath(
  [[0, 0, 0], [1, 1, 0], [0, 0, 0]],
  [0, 0], [2, 0]
)); // 6

// 4. COUNT CONNECTED COMPONENTS in a grid — how many separate regions?
function countRegions(grid) {
  const visited = new Set();
  let count = 0;

  function dfs(r, c, target) {
    const key = `${r},${c}`;
    if (!inBounds(grid, r, c) || visited.has(key) || grid[r][c] !== target) return;
    visited.add(key);
    for (const [dr, dc] of DIRS) {
      dfs(r + dr, c + dc, target);
    }
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (!visited.has(`${r},${c}`) && grid[r][c] === 1) {
        count++;
        dfs(r, c, 1);
      }
    }
  }
  return count;
}

console.log("regions:", countRegions([
  [1, 1, 0, 0],
  [0, 0, 0, 1],
  [1, 0, 0, 1],
])); // 3


// ╔═══════════════════════════════════╗
// ║  GRAPH WITH ADJACENCY LIST        ║
// ╚═══════════════════════════════════╝

// 5. BUILD an adjacency list from edges
function buildGraph(n, edges, directed = false) {
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of edges) {
    graph[from].push(to);
    if (!directed) graph[to].push(from); // undirected
  }
  return graph;
}

const graph = buildGraph(5, [[0, 1], [0, 2], [1, 3], [2, 4]]);
console.log("graph:", graph);
// [ [1,2], [0,3], [0,4], [1], [2] ]

// 6. DFS on a graph — visit all reachable nodes
function dfsGraph(graph, start) {
  const visited = new Set();
  const result = [];

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);

    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  dfs(start);
  return result;
}
console.log("DFS from 0:", dfsGraph(graph, 0)); // [0, 1, 3, 2, 4]

// 7. BFS on a graph — level by level
function bfsGraph(graph, start) {
  const visited = new Set([start]);
  const queue = [start];
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    result.push(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return result;
}
console.log("BFS from 0:", bfsGraph(graph, 0)); // [0, 1, 2, 3, 4]

// 8. COUNT CONNECTED COMPONENTS in a graph
function countComponents(n, edges) {
  const graph = buildGraph(n, edges);
  const visited = new Set();
  let count = 0;

  function dfs(node) {
    if (visited.has(node)) return;
    visited.add(node);
    for (const neighbor of graph[node]) {
      dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count++;
      dfs(i);
    }
  }
  return count;
}
console.log("components:", countComponents(5, [[0, 1], [2, 3]])); // 3 (nodes: {0,1}, {2,3}, {4})

// 9. DETECT CYCLE in undirected graph
function hasCycle(n, edges) {
  const graph = buildGraph(n, edges);
  const visited = new Set();

  function dfs(node, parent) {
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor, node)) return true;
      } else if (neighbor !== parent) {
        return true; // visited and not parent = cycle!
      }
    }
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      if (dfs(i, -1)) return true;
    }
  }
  return false;
}
console.log("has cycle:", hasCycle(4, [[0, 1], [1, 2], [2, 0]]));    // true
console.log("has cycle:", hasCycle(4, [[0, 1], [1, 2], [2, 3]]));    // false


// ─── EXAMPLE ───
// Q: Clone Graph — deep copy a graph (each node has val and neighbors[])
class GraphNode {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  if (!node) return null;
  const map = new Map(); // original -> clone

  function dfs(n) {
    if (map.has(n)) return map.get(n);
    const clone = new GraphNode(n.val);
    map.set(n, clone);
    for (const neighbor of n.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }
    return clone;
  }

  return dfs(node);
}

// Build a small graph: 1 -- 2 -- 3
const g1 = new GraphNode(1);
const g2 = new GraphNode(2);
const g3 = new GraphNode(3);
g1.neighbors = [g2]; g2.neighbors = [g1, g3]; g3.neighbors = [g2];
const cloned = cloneGraph(g1);
console.log("cloned val:", cloned.val, "neighbor:", cloned.neighbors[0].val); // 1, 2
console.log("is deep copy:", cloned !== g1); // true


// ─── PRACTICE ───
// Q1: Max Area of Island — like numIslands but return the SIZE of the biggest island
function maxAreaOfIsland(grid) {
  // TODO (hint: DFS returns 1 + sum of DFS on neighbors, track max)
}
// console.log(maxAreaOfIsland([
//   [0,0,1,0,0],
//   [0,1,1,1,0],
//   [0,0,1,0,0],
// ])); // 5

// Q2: Find if a path exists between two nodes in an undirected graph
function validPath(n, edges, source, destination) {
  // TODO (hint: build graph, DFS/BFS from source, check if destination is visited)
}
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)); // false
// console.log(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 3, 4)); // true

// Q3: Surrounded Regions — flip all 'O' that are NOT connected to the border
function solve(board) {
  // TODO (hint: DFS from border O's first to mark them safe, then flip remaining O's)
}
// const b = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
// solve(b);
// console.log(b);
// [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]


// ════════════════════════════════════════════════
// PRACTICE FROM SCRATCH — write everything below
// without looking at the top of the file!
// ════════════════════════════════════════════════

// --- GRID ---

// 1. The 4 directions constant
const MY_DIRS = []; // TODO: [[1,0],[-1,0],[0,1],[0,-1]]

// 2. Check if position is valid
function myInBounds(grid, r, c) {
  // TODO — r >= 0 && r < rows && c >= 0 && c < cols
}

// 3. Number of Islands — DFS, sink visited land to "0"
function myNumIslands(grid) {
  // TODO — loop grid, when find "1": count++, dfs to sink connected land
}
console.log(myNumIslands([
  ["1", "1", "0", "0"],
  ["1", "0", "0", "0"],
  ["0", "0", "1", "1"],
])); // Expected: 2

console.log(myNumIslands([
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
])); // Expected: 1

// 4. Flood Fill — change color of connected region
function myFloodFill(image, sr, sc, color) {
  // TODO — save original color, DFS and replace
}
const myImg = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
console.log(myFloodFill(myImg, 1, 1, 2));
// Expected: [[2,2,2],[2,2,0],[2,0,1]]

// --- GRAPH ---

// 5. Build adjacency list from edges
function myBuildGraph(n, edges) {
  // TODO — Array.from({length: n}, () => []), loop edges
}
console.log(myBuildGraph(4, [[0, 1], [0, 2], [1, 3]]));
// Expected: [[1,2],[0,3],[0],[1]]

// 6. DFS on a graph — return all visited nodes
function myDfsGraph(graph, start) {
  // TODO — visited Set, recursive dfs
}
const myGraph = myBuildGraph(5, [[0, 1], [0, 2], [1, 3], [2, 4]]);
console.log(myDfsGraph(myGraph, 0)); // Expected: [0, 1, 3, 2, 4]

// 7. BFS on a graph — return nodes in BFS order
function myBfsGraph(graph, start) {
  // TODO — queue + visited Set
}
console.log(myBfsGraph(myGraph, 0)); // Expected: [0, 1, 2, 3, 4]

// 8. Count connected components
function myCountComponents(n, edges) {
  // TODO — build graph, DFS from each unvisited node, count groups
}
console.log(myCountComponents(5, [[0, 1], [2, 3]])); // Expected: 3
console.log(myCountComponents(4, [[0, 1], [1, 2], [2, 3]])); // Expected: 1

// 9. Detect cycle in undirected graph — DFS with parent tracking
function myHasCycle(n, edges) {
  // TODO — if visited neighbor is not parent, cycle found
}
console.log(myHasCycle(4, [[0, 1], [1, 2], [2, 0]])); // Expected: true
console.log(myHasCycle(4, [[0, 1], [1, 2], [2, 3]])); // Expected: false
