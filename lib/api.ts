import { API } from "./constants";

export async function QuotesFetcher() {
    const apiUrl = API.BASE_URL;

    const headers = new Headers();
    headers.append("X-RapidAPI-Key", "449c973209msh94f98365324a322p168addjsn034b8599e932");
    headers.append("X-RapidAPI-Host", "andruxnet-random-famous-quotes.p.rapidapi.com");

    const res = await fetch(apiUrl, { cache: 'no-store' });

    let data = await res.json();

    return data;
}