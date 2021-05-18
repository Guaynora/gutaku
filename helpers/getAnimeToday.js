import React from 'react'

export const getAnimeToday = async () => {

    const url = `https://api.jikan.moe/v3/schedule/${day}`
    let res = await fetch(url)
    let json = await res.json()
    return json
}
