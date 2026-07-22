import { memo, useState } from 'react'
import { companyMarks } from '../../lib/companyMarks'
import './CompanyMark.css'

type CompanyMarkProps = {
  company: string
}

function CompanyMark({ company }: CompanyMarkProps) {
  const [hasLogoError, setHasLogoError] = useState(false)
  const brand = companyMarks[company] || {
    label: company,
    mark: company,
    tone: 'default',
  }

  return (
    <div className={`company-mark ${brand.tone}`} aria-label={brand.label} role="img">
      {brand.logoPath && !hasLogoError ? (
        <img
          alt=""
          loading="lazy"
          src={brand.logoPath}
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
