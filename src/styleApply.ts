import { TType } from "./types/modules";

export const styleApply = (type: TType, selectedText: string) => {
  let formattedText = selectedText;

  if(type.includes("#")) {
    formattedText = `<mark style="color: ${type};">` + selectedText + '</mark>'
    return formattedText
  }


  switch (type) {
    case 'bold':
      formattedText = '<b>' + selectedText + '</b>'
      break
    case 'italic':
      formattedText = '<i>' + selectedText + '</i>'
      break
    case 'underline':
      formattedText = '<u>' + selectedText + '</u>'
      break
    case 'quote':
      formattedText = '<q>' + selectedText + '</q>'
      break
    case 'h1':
      formattedText = '<h1>' + selectedText + '</h1>'
      break
    case 'h2':
      formattedText = '<h2>' + selectedText + '</h2>'
      break
    case 'h3':
      formattedText = '<h3>' + selectedText + '</h3>'
      break
    
      
      default: 
        formattedText = selectedText
  }

  return formattedText
}