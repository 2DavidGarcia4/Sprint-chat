import { endPoint } from "./data"
import { User } from "./types"

export const transformText = (text: string) => {
  text = text.replace(/> /g, ``)

  if(text.includes('**')){
    const sep = text.split('**')
    if(sep.length % 2 != 0){
      text = sep.map((m, i) => i+1 == sep.length ? m : i%2 ? m+'</strong>' : m+'<strong>').join('')
    }
  }
  
  if(text.includes('*')){
    const sep = text.split('*')
    if(sep.length % 2 != 0){
      text = sep.map((m, i) => i+1 == sep.length ? m : i%2 ? m+'</em>' : m+'<em>').join('')
    }
  }

  text = text.split(' ').map(m=> {
    if(m.includes('http')){
      const start = m.indexOf('http')
      const preLink = m.slice(start, m.length)
      const end = (preLink.includes('<') ? preLink.indexOf('<') : preLink.length)+start
      const link = m.slice(start, end)

      return `${start == 0 ? '' : m.slice(0, start)}<a href="${link}" target="_blank">${link}</a>`+m.slice(end, m.length)
    }else return m
  }).join(' ')

  return text
}

export async function customFetch(route: string, method='GET', body?: Object) {
  if(typeof localStorage != 'undefined'){
    const token = localStorage.getItem('secret')

    return fetch(endPoint+route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(prom=> prom.json())
  }
  return {message: 'No client'}
}