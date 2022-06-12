import {useEffect, useState} from 'react'

function ActivateDarkTheme() {
  let [darkTheme, setDarkTheme] = useState(true)

  useEffect(() => {

    let mainDocument = window.document.documentElement
    if (darkTheme) {
      mainDocument.setAttribute('data-theme', "dark")
    } else {
      mainDocument.setAttribute('data-theme', "light")
    }

  }, [darkTheme])

  return [darkTheme, setDarkTheme]

}

export {ActivateDarkTheme}
