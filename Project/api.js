const javaUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=Java_(programming_language)&format=json';
const javaProxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(javaUrl);

const pythonURl = 'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&titles=Python_(programming_language)&format=json';
const pythonProxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(pythonURl);


// Fetches Java description
async function getJavaDescription() {
  try {
    const response = await fetch(javaProxyUrl);
    const data = await response.json();

    // Extract first page
    const contents = JSON.parse(data.contents); 
    const page = contents.query.pages;
    const pageId = Object.keys(page)[0]; 
    const description = page[pageId].extract;

    // Formatting the data
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = description;
    
    let firstParagraph = '';
    const paragraphs = tempDiv.querySelectorAll('p');

    for (let p of paragraphs) {
      if (p.textContent.trim() !== '') {
        firstParagraph = p.textContent.trim();
        break;
      }
    }

    // Inject the API data into the page
    document.getElementById('java-description').textContent = firstParagraph;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Fetches Python description
async function getPythonDescription() {
    try {
      const response = await fetch(pythonProxyUrl);
      const data = await response.json();
  
      // Extract first page
      const contents = JSON.parse(data.contents); 
      const page = contents.query.pages;
      const pageId = Object.keys(page)[0]; 
      const description = page[pageId].extract;
  
      // Formatting the data
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = description;
      
      let firstTwoParagraphs = ''; 
      const paragraphs = tempDiv.querySelectorAll('p'); 
      let paragraphCount = 0
  
      paragraphs.forEach(p => { 
        if (p.textContent.trim() !== '' && paragraphCount < 2) { 
            firstTwoParagraphs += p.textContent.trim() + '\n\n'; 
            paragraphCount++; 
        } 
    });
  
      // Inject the API data into the page
      document.getElementById('python-description').textContent = firstTwoParagraphs;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

getJavaDescription();
getPythonDescription();





