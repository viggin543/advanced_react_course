import fetch from "node-fetch";

export const fetchArticles = async  () => {
    let route = `http://pd2cwpoovh.execute-api.us-east-2.amazonaws.com/latest/data`;
    const res = await fetch(route);
    return await res.json();
};