export const getPhotos = async (currentPage, listTitle) => {
  try {
    const ACCESS_KEY = "p2C52aVN0rZ6XjMW2AKe8jTiAQ4VVARGNIEs_SrcSQQ"
    const imgUrl = `https://api.unsplash.com/search/photos?page=${currentPage}&per_page=12&query=${listTitle}&client_id=${ACCESS_KEY}`

    const getData = await fetch(imgUrl)
    const { results } = await getData.json()
    return results
  } catch (error) {
    console.log("error on getPhotos :", error)
  }
}