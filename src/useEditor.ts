import { useRef, useState } from "react";
import { styleApply } from "./styleApply";
import { TType } from "./types/modules";

export function useEditor() {
  const [text, setText] = useState('')
	const refText = useRef<HTMLTextAreaElement | null>(null);
	const[selectionStart, setselectionStart] = useState(0);
	const[selectionEnd, setselectionEnd] = useState(0);

	const updateSelection = () => {
		if (!refText.current) return
		setselectionStart(refText.current.selectionStart)
		setselectionEnd(refText.current.selectionEnd)
	}


	const applyFormat = (type: TType) => {

		const selectedText = text.substring(selectionStart, selectionEnd) // выделенный текст
    if (!selectedText) return
		const before = text.substring(0, selectionStart) // текст до выделенного текста
		const after = text.substring(selectionEnd) // текст после выделенного текста

		setText(before + styleApply(type, selectedText) + after)

	}

  return { applyFormat, text, setText, updateSelection, refText }
	
}
