var store = [{
        "title": "回溯",
        "excerpt":"如何理解回溯法 回溯法（backtracking）是暴力搜索法中的一种。 对于某些计算问题而言，回溯法是一种可以找到所有（或一部分）解的一般性算法，尤其适用于约束满足问题。（在解决约束满足问题时，我们逐步构造更多的候选解，并且在确定某一部分候选解不可能补全成正解之后放弃继续搜索这个部分候选解本身及其可以拓展出的子候选解，转而测试其他的部分候选解）。 基本思想 回溯法解决的问题都可以抽象为树形结构！集合的大小就构成了树的宽度，递归的深度就构成了树的深度。 在包含问题的所有解的空间树树中，按照深度优先搜索的策略，从根节点出发深度搜索解空间树。当搜索到某一结点时，要判断该结点是否包含问题的解，如果包含，就从该结点出发继续探索下去，如果该结点不包含问题的解，则逐层向其祖先结点回溯。 若用回溯法求问题的所有解时，要回溯到根，且根结点的所有可行的子树都要已被搜索遍才结束。 若用回溯法求解问题的任一解时，只要搜索到问题的一个解就可以结束。 求解步骤 针对所有问题，确定问题的解空间： 首先应明确定义问题的解空间，问题的解空间应至少包含问题的一个（最优）解。 确定结点的扩展搜索规则 以深度优先方式搜索解空间，并在搜索过程中用剪枝函数避免无效搜索 算法框架 实际上，回溯算法就是一个N叉树的前序遍历加上后续遍历而已。 同时，回溯算法是有模板的。用递归表示N叉树的深度遍历，在每次深度遍历的过程中，又横向遍历每一层所有的条件。 # 二叉树遍历框架 def traverse(root): if root is None: return # 前序遍历代码写在这 traverse(root.left) # 中序遍历代码写在这 traverse(root.right) # 后序遍历代码写在这 # N 叉树遍历框架 def traverse(root): if root is None: return for child in root.children: # 前序遍历代码写在这 traverse(child)...","categories": ["ds-algo"],
        "tags": [],
        "url": "/ds-algo/backtrack/",
        "teaser": null
      },{
        "title": "二分查找",
        "excerpt":"基本概念 Although the basic idea of binary search is comparatively straightforward, the details can be surprisingly tricky… 二分查找，也称为折半查找。每次查找都将查找区间减半，因此时间复杂度为$O(logn)$ 查找区间有序 防止加法溢出，也就是说加法的结果大于整型能够表示的范围。 mid = (right + left) / 2; 这种情况可能出现加法溢出，即 和超出int范围。 应使用 mid = left + (right - left) / 2 当然，除以2可以用右移一位代替，也是官方推荐：mid = left + (right - left) » 1 更高级，防止减法溢出：mid = (left...","categories": ["ds-algo"],
        "tags": [],
        "url": "/ds-algo/binary_search/",
        "teaser": null
      }]
