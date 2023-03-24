function BFS(root, value) {
    const queue = [];
    queue.push(root);

    while(queue.length) {
        let v = queue.shift();

        if (v.value === value) {
            return v;
        }

        for (let i = 0; i < v.children.length; i++) {
            queue.push(v.children[i]);
        }
    }

    return undefined;
}
