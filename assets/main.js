const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCTLzy3j4ydW1diZXSy62Aqw&part=snippet%2Cid&order=date&maxResults=12';
const content = document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cc754b3c05msh9f955300323426fp1a6b25jsn0dbe27a7f142',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData (urlApi, options){
const response = await fetch(urlApi, options)
const data = await response.json()
return data
}

(async () =>{
  try{
    const response = await fetchData(url, options)
    let view =`${response.items.map(video =>  
      `<div class="group relative">
          <div
            class="cursor-pointer w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex text-center">
            <h3 class=" text-grey-300 font-bold">
              <span aria-hidden="true" class="absolute-inset"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
        `).slice(0,12).join('')}
        `;content.innerHTML = view
  }catch(e){
    console.log(e)
  }
})()

