import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import Image from 'next/image'

const heading = {
  description:
    'Never lose track of valuable information again. Effortlessly save and retrieve your online discoveries, personal notes, and documents, all in one secure place.',
  companies: [
    [
      { name: 'Transistor', logo: logoTransistor },
      { name: 'Tuple', logo: logoTuple },
      { name: 'StaticKit', logo: logoStaticKit },
    ],
    [
      { name: 'Mirage', logo: logoMirage },
      { name: 'Laravel', logo: logoLaravel },
      { name: 'Statamic', logo: logoStatamic },
    ],
  ],
}

export function LogoCloud() {
  return (
    <div className="mt-36 lg:mt-44">
      <p className="font-display text-base text-slate-900">Trusted by employees of these companies</p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
      >
        {heading.companies.map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul role="list" className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0">
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image src={company.logo} alt={company.name} unoptimized />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
