import { NextRequest, NextResponse } from 'next/server';

// Variable to hold the last fetched GIF ID
let lastGifId: string | null = null;

export async function GET(request: NextRequest) {
  const searchTerm = request.nextUrl.searchParams.get('searchTerm');
  const apiKey = process.env.GIPHY_API_KEY;

  try {
    // Initialize a variable to hold the selected GIF
    let randomGif = null;

    // Fetch GIFs until a different one is found or a maximum number of retries is reached
    const maxRetries = 5; // Limit to avoid infinite loop
    let attempts = 0;

    while (attempts < maxRetries) {
      attempts++;
      
      // Fetch GIFs from Giphy API
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=5`);
      const data = await response.json();

      if (data?.data?.length > 0) {
        // Randomly select one GIF from the results
        randomGif = data.data[Math.floor(Math.random() * data.data.length)];

        // Check if the selected GIF is the same as the last one
        if (randomGif.id !== lastGifId) {
          break; // Found a different GIF, exit loop
        }
      }
    }

    if (randomGif) {
      // Update the lastGifId to the current one
      lastGifId = randomGif.id;
      return NextResponse.json({ gifUrl: randomGif.images.downsized_medium.url });
    } else {
      return NextResponse.json({ gifUrl: null }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching GIF:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the GIF.' }, { status: 500 });
  }
}
