---
title: "数据结构与算法题单"
permalink: /leetcode/

layout: single
author_profile: false
toc: true
toc_sticky: true
---

# 数据结构与算法刷题笔记

这是一份个人笔记，适用于系统刷题、知识图谱构建、错题回顾。

👉 [点击这里查看相关文章](/leetcode/posts/)

---

## 分类概览

| 主分类编号 | 主分类名称           | 子分类概述 |
|------------|----------------------|------------|
| 1          | 暴力 / 模拟类        | 矩阵模拟、字符串转换、边界处理等基础模拟技巧 |
| 2          | 哈希表 / 计数 / 映射 | 哈希查找、频次统计、哈希+前缀和结合 |
| 3          | 前缀和 / 差分        | 一维/二维前缀和、差分、异或前缀 |
| 4          | 排序与二分查找       | 经典排序、上下界查找、答案类二分 |
| 5          | 双指针 & 滑窗        | 快慢指针、对撞指针、滑动窗口模板 |
| 6          | 栈 / 队列 / 单调结构 | 括号匹配、单调栈队列、辅助栈 |
| 7          | 堆 / 优先队列        | 小/大顶堆、Top K、合并流、动态中位数 |
| 8          | 数学类               | 筛法、位运算、组合数学、数位DP |
| 9          | 分治 / 回溯 / 递归   | 全排列、剪枝优化、分治归并 |
| 10         | 贪心算法             | 跳跃类、区间调度、局部最优策略 |
| 11         | 动态规划（DP）       | 线性DP、背包、区间DP、状态压缩 |
| 12         | 树与字典树           | 二叉树、BST、Trie、树形DP/LCA |
| 13         | 图论                 | 遍历、拓扑、最短路、最小生成树、并查集、SCC |
| 14         | 设计类题型           | LRU/LFU、跳表、复杂数据结构设计 |

---

## 1. 暴力 / 模拟类

### 子分类
- **矩阵遍历与模拟**：处理二维矩阵中的顺序、转圈、路径模拟等。
- **字符串与进制转换**：实现进制转换、模拟加法、字符串构造。
- **模拟题（边界判断、手动实现）**：逻辑清晰但实现复杂，注重边界处理。

### 题单
- [54. 螺旋矩阵](https://leetcode.cn/problems/spiral-matrix/)
- [67. 二进制求和](https://leetcode.cn/problems/add-binary/)
- [168. Excel表列名称](https://leetcode.cn/problems/excel-sheet-column-title/)

---

## 2. 哈希表 / 计数 / 映射

### 子分类
- **哈希映射与查找**：快速定位数据位置，典型如 Two Sum。
- **频次统计**：统计字符、单词、数组中元素出现次数。
- **哈希 + 前缀和**：在子数组和、区间统计中提高效率。

### 题单
- [1. 两数之和](https://leetcode.cn/problems/two-sum/)
- [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/)
- [560. 和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/)

---

## 3. 前缀和 / 差分技巧

### 子分类
- **一维前缀和**：区间和快速计算。
- **二维前缀和**：用于矩阵区域和问题。
- **差分数组**：用于快速区间修改。
- **异或前缀和**：用于子数组异或值问题。

### 题单
- [303. 区域和检索 - 数组不可变](https://leetcode.cn/problems/range-sum-query-immutable/)
- [1094. 拼车](https://leetcode.cn/problems/car-pooling/)
- [1314. 矩阵区域和](https://leetcode.cn/problems/matrix-block-sum/)

---

## 4. 排序与二分查找

### 子分类
- **快速排序 / 归并排序**：掌握经典排序算法。
- **二分查找（上下界、答案类）**：查找位置或答案判定。
- **排序优化算法**：如桶排序、计数排序。

### 题单
- [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/)
- [34. 查找元素范围](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)

---

## 5. 双指针 & 滑动窗口

### 子分类
- **快慢指针**：链表操作、移除重复等。
- **对撞指针**：排序数组中求和等。
- **滑动窗口模板题**：维护区间最值、字符频率等。

### 题单
- [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
- [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)
- [438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)

---

## 6. 栈 / 队列 / 单调栈 / 单调队列

### 子分类
- **括号匹配问题**：基本栈应用。
- **单调栈 / 单调队列**：求区间最值、直方图最大矩形等。
- **辅助栈结构**：如最小栈。

### 题单
- [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
- [155. 最小栈](https://leetcode.cn/problems/min-stack/)
- [239. 滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)

---

## 7. 堆 / 优先队列

### 子分类
- **小顶堆 / 大顶堆**：维护最值。
- **Top K 问题**：维护 K 个最大/最小元素。
- **合并有序流 / 中位数维护**：多个排序流合并或实时中位数。

### 题单
- [215. 第K大元素](https://leetcode.cn/problems/kth-largest-element-in-an-array/)
- [295. 数据流中位数](https://leetcode.cn/problems/find-median-from-data-stream/)
- [23. 合并K个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)

---

## 8. 数学类

### 子分类
- **质数与筛法**：埃氏筛、线性筛。
- **位运算技巧**：与或异或、移位技巧。
- **组合数学**：排列组合、组合数计算。
- **数位DP**：按位构造状态的动态规划。

### 题单
- [204. 计数质数](https://leetcode.cn/problems/count-primes/)
- [231. 2的幂](https://leetcode.cn/problems/power-of-two/)
- [172. 阶乘后的零](https://leetcode.cn/problems/factorial-trailing-zeroes/)

---

## 9. 分治 / 回溯 / 递归

### 子分类
- **全排列 / 子集 / 组合**：DFS 构造所有解。
- **剪枝与回溯优化**：提升回溯效率。
- **归并排序 / 快速幂**：典型分治思想实现。

### 题单
- [46. 全排列](https://leetcode.cn/problems/permutations/)
- [77. 组合](https://leetcode.cn/problems/combinations/)
- [51. N皇后](https://leetcode.cn/problems/n-queens/)

---

## 10. 贪心算法

### 子分类
- **跳跃类问题**：能否跳到终点，最少跳几次。
- **区间调度类**：覆盖、合并区间问题。
- **局部最优构造全局最优**：背包选择、调度策略等。

### 题单
- [55. 跳跃游戏](https://leetcode.cn/problems/jump-game/)
- [134. 加油站](https://leetcode.cn/problems/gas-station/)
- [452. 引爆气球](https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/)

---

## 11. 动态规划（DP）

### 子分类
- **线性 DP**：如打家劫舍、爬楼梯。
- **背包问题**：01 背包、完全背包、多重背包。
- **区间 DP**：如戳气球、合并石头。
- **状态压缩 DP**：位运算优化状态表示。

### 题单
- [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)
- [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)
- [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)

---

## 12. 树与字典树

### 子分类
- **二叉树遍历（递归 / 迭代）**：前中后序、层序等。
- **二叉搜索树（BST）**：插入、删除、搜索性质。
- **Trie 字典树**：前缀结构高效查询。
- **树形 DP / LCA 问题**：在树结构上处理状态。

### 题单
- [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)
- [98. 验证 BST](https://leetcode.cn/problems/validate-binary-search-tree/)
- [208. 实现 Trie](https://leetcode.cn/problems/implement-trie-prefix-tree/)

---

## 13. 图论

### 子分类
- **图的表示与遍历**：邻接表、DFS、BFS。
- **拓扑排序**：Kahn 算法、DFS 拓扑排序。
- **最短路径算法**：Dijkstra、SPFA、Floyd、Bellman-Ford。
- **最小生成树**：Kruskal、Prim 算法。
- **并查集**：路径压缩、按秩合并。
- **强连通分量（SCC）**：Tarjan、Kosaraju 算法。

### 题单
- [200. 岛屿数量](https://leetcode.cn/problems/number-of-islands/)
- [207. 课程表](https://leetcode.cn/problems/course-schedule/)
- [743. 网络延迟时间](https://leetcode.cn/problems/network-delay-time/)
- [1584. 最小费用连接所有点](https://leetcode.cn/problems/min-cost-to-connect-all-points/)
- [547. 省份数量](https://leetcode.cn/problems/number-of-provinces/)

---

## 14. 设计类题型

### 子分类
- **LRU / LFU 结构**：经典缓存淘汰策略。
- **跳表 / O(1) 插删查**：数据结构实现优化。
- **模拟数据库、缓存系统**：复杂操作模拟与设计。

### 题单
- [146. LRU 缓存机制](https://leetcode.cn/problems/lru-cache/)
- [380. 常数时间插删查](https://leetcode.cn/problems/insert-delete-getrandom-o1/)
- [432. 全 O(1) 数据结构](https://leetcode.cn/problems/all-oone-data-structure/)

---
