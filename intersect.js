/* intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
) // [[8, 11], [17, 18], [20, 22]]

intersection(
    [[9, 15], [18, 21]],
    [[10, 14], [21, 22]]
) // [[10, 14]] */

//a.start <= b.end AND a.end >= b.start  - условие того что два массива имеют пересечение в виде [max(a.start,b.start); min(a.end,b.end)]


function hasIntersection(interval1, interval2) {
	return (interval1[0] < interval2[1]) && (interval1[1] > interval2[0])
}

function getIntersection(interval1, interval2) {
	return [Math.max(interval1[0],interval2[0]), Math.min(interval1[1],interval2[1])];
}

function intersection(user1, user2) {
	const l1 = user1.length;
	const l2 = user2.length;
	const intersectArr = [];
	for (var i = 0; i < l1; i++) {
		const int1 = user1[i];
		console.log('int1:' + int1);
		for (var j = 0; j < l2; j++) {
			const int2 = user2[j];
			console.log('		int2:' + int2);
			console.log('		' + hasIntersection(int1, int2));
			if (hasIntersection(int1, int2)) {
				console.log(getIntersection(int1,int2));
				intersectArr.push(getIntersection(int1,int2));
			}
		}
	}
	console.log(	 intersectArr);
}

function intersection1(user1, user2) {
    const list = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < user1.length && i2 < user2.length) {
        const leftOffset = Math.max(user1[i1][0], user2[i2][0]);
        const rightOffset = Math.min(user1[i1][1], user2[i2][1]);
        
        if (rightOffset > leftOffset) {
            list.push([leftOffset, rightOffset]);
        }

        user1[i1][1] < user2[i2][1] ? ++i1 : ++i2;
    }

    return list;
}

intersection(
    [[8, 12], [17, 22]],
    [[5, 11], [14, 18], [20, 23]]
)