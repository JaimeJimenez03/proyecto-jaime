export const environment = {
    API_URL: "http://localhost:8080",

    jsonEqual(a: any, b: any) {
        return JSON.stringify(a) === JSON.stringify(b);
    }
};
