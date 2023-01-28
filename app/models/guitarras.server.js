export async function getGuitarras() {
    const resp = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const data = await resp.json()
    return data
}

export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}