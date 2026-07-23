import { memo, useState } from 'react'
import './CompanyMark.css'

type CompanyMarkBrand = {
  label: string
  logoHeight?: number
  logoPath?: string
  logoWidth?: number
  mark: string
  prefix?: string
  tone: string
}

type CompanyMarkProps = {
  brand: CompanyMarkBrand
}

function CompanyMark({ brand }: CompanyMarkProps) {
  const [hasLogoError, setHasLogoError] = useState(false)

  return (
    <div className={`company-mark ${brand.tone}`} aria-label={brand.label} role="img">
      {brand.logoPath && !hasLogoError ? (
        <img
          alt=""
          height={brand.logoHeight}
          loading="lazy"
          src={brand.logoPath}
          width={brand.logoWidth}
          onError={() => setHasLogoError(true)}
        />
      ) : (
        <span>
          {brand.prefix ? <em>{brand.prefix}</em> : null}
          <strong>{brand.mark}</strong>
        </span>
      )}
    </div>
  )
}

export default memo(CompanyMark)
