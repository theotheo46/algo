function DFS(node, value) {
    if (node.value === value) {
        return node;
    }

    // Recurse with all children
    for (var i = 0; i < node.children.length; i++) {
        var result = dfs(node.children[i], value);
        if (result !== undefined) {
            // We've found the goal node while going down that child
            return result;
        }
    }

    return undefined;
}
