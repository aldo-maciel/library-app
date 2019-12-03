export interface Book {
    name: string;
    author: string;
    cover: {
        base64: string,
        file: {},
        name: string,
        size: number,
        type: string
    };
    description: string
}
