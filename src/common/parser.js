
export const data_to_plain = (html_string)=> {

    const parser = new DOMParser()
    const doc = parser.parseFromString(html_string, 'text/html')
    const headings = Array.from(doc.querySelectorAll('h1,h2,h3,h4,h5,h6'))
    const paragraphs = Array.from(doc.querySelectorAll('p', 'a'))

    const result = {
        headings: headings.map((heading) => heading.textContent), 
        paragraphs: paragraphs.map((paragraph) => paragraph.textContent)
    }
    
    return result
}

export const plain_to_sections = (html_string) => {
    const _plain = data_to_plain(html_string)
    let sections = []
    _plain.headings.forEach((heading) => {
        sections.push({
            section_title: heading,
            text: ''
        })
    })

    for(let i = 0;  i < _plain.paragraphs.length; i++) {
        if(sections[i]) {
            sections[i].text = _plain.paragraphs[i]
        }
        else {
            console.log('error section', html_string)
        }
    }

    return sections

}