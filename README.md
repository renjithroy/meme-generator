# Meme Generator

This is a simple meme generator built using React. It allows you to create memes by adding custom text to a random image fetched from the Imgflip API.

## Features

- Add top and bottom text to a random meme image.
- Get a new random meme image with updated text.
- Uses the Imgflip API to fetch a list of meme images.

## How It Works

The main functionality of the meme generator is implemented in the `Meme` component. Here's a breakdown of the main features:

- The `meme` state holds the top text, bottom text, and the URL of the random meme image.
- The `allMemes` state holds the list of meme images fetched from the Imgflip API.
- On component mount, the `useEffect` hook fetches the list of meme images from the Imgflip API and updates the `allMemes` state.
- The `getMemeImage` function selects a random meme image URL from the `allMemes` list and updates the `randomImage` in the `meme` state.
- The `handleChange` function updates the corresponding text (top or bottom) in the `meme` state as users type into the input fields.
- The render displays the meme image along with the top and bottom text if they are provided.