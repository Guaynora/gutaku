import React from "react";

export const getAnimeToday = async () => {
  const url = `https://api.jikan.moe/v3/schedule/${day}`;
  const res = await fetch(url);
  const json = await res.json();
  return json;
};
