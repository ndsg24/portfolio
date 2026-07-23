import { useEffect } from 'react'
import { seoContent } from '../../i18n/seo'
import type { LanguageCode } from '../../shared/types'

function setMetaContent(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content)
}

function setAlternateLanguageLink(language: LanguageCode) {
  let link = document.querySelector<HTMLLinkElement>(`link[hreflang="${language}"]`)
  if (!link) {
    link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = language
    document.head.append(link)
  }

  const url = new URL(window.location.href)
  url.hash = ''
  url.searchParams.set('lang', language)
  link.href = url.toString()
}

export function useDocumentLanguage(language: LanguageCode): void {
  useEffect(() => {
    document.documentElement.lang = language
    const seo = seoContent[language]
    document.title = seo.title
    setMetaContent('meta[name="description"]', seo.description)
    setMetaContent('meta[property="og:title"]', seo.title)
    setMetaContent('meta[property="og:description"]', seo.description)
    setMetaContent('meta[property="og:locale"]', seo.locale)
    setMetaContent('meta[name="twitter:title"]', seo.title)
    setMetaContent('meta[name="twitter:description"]', seo.description)

    ;(['es', 'en', 'pt'] as LanguageCode[]).forEach(setAlternateLanguageLink)
    const canonicalUrl = new URL(window.location.href)
    canonicalUrl.hash = ''
    canonicalUrl.searchParams.set('lang', language)
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', canonicalUrl.toString())
    setMetaContent('meta[property="og:url"]', canonicalUrl.toString())
  }, [language])
}
