export const createGrid = (width, height) => {
    return Array.from({ length: width }, () =>
        Array.from({ length: height }, () =>
            [
                Math.round(Math.random()),
                Math.round(Math.random()),
                Math.round(Math.random())
            ])
    );
}

export const createZeroGrid = (width, height) => {
    return Array.from({ length: width }, () =>
        Array.from({ length: height }, () =>
            [0, 0, 0])
    );
}
export const createBWGrid = (width, height) => {
    return Array.from({ length: width }, () =>
        Array.from({ length: height }, () => {
            const val = Math.round(Math.random());
            return [val, val, val];
        })
    );
}

export const createTestGrid = (width, height) => {
    const b = [0, 0, 0];
    const w = [1, 1, 1];
    return [
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, w, b, b, b, b, b, b],
        [b, b, b, w, w, b, b, b, b, b],
        [b, b, b, b, w, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b, b]
    ];
}
