import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const tabs = [
  { name: 'Overview', href: '', current: true },
  { name: 'Structure', href: '#structure', current: false },
  { name: 'Surface', href: '#surface', current: false },
]

const planet = (): string => {
  const renders: { [key: string]: string } = {
    Overview: '/assets/planet-mercury.svg',
    Structure: '/assets/planet-mercury-internal.svg',
    Surface: '/assets/planet-mercury.svg',
  }

  return renders[tabs.find(tab => tab.current === true)?.name || 'Overview']
}

const Mercury = () => {
  const router = useRouter()

  useEffect(() => {
    const handleHashChange = () => {
      tabs.map(tab => {
        if (tab.href === window.location.hash) {
          // eslint-disable-next-line no-param-reassign
          tab.current = true
        } else {
          // eslint-disable-next-line no-param-reassign
          tab.current = false
        }

        return tab
      })
    }

    router.events.on('hashChangeComplete', handleHashChange)
  }, [])

  return (
    <Layout>
      <div className='flex items-center justify-between border-b border-white border-opacity-20 px-6 font-spartan font-bold text-[9px] tracking-[1.93px] text-white uppercase'>
        {tabs.map(tab => {
          if (tab.current === true) {
            return (
              <div
                key={tab.name}
                className='border-b-4 border-[#419EBB] pt-5 pb-[17px]'
              >
                {tab.name}
              </div>
            )
          }

          return (
            <Link key={tab.name} href={tab.href}>
              <a className='text-white py-5 text-opacity-50'>{tab.name}</a>
            </Link>
          )
        })}
      </div>

      <div className='flex flex-col items-center justify-center px-6 pb-[47px]'>
        <div className='relative w-[111px] mt-[95px]'>
          <img src={planet()} alt='Mercury' className='w-[111px] h-[111px]' />

          {tabs.find(tab => tab.current === true)?.name === 'Surface' ? (
            <img
              src='/assets/geology-mercury.png'
              className='origin-bottom absolute left-1/2 -bottom-1/2 transform -translate-x-1/2 translate-y-5 w-20'
              alt="Mercury's geology"
            />
          ) : (
            ''
          )}
        </div>

        <div className='flex flex-col items-center justify-center mt-[98px] text-center'>
          <p className='font-antonio text-h2 font-medium text-white uppercase'>
            Mercury
          </p>

          <p className='pt-4 font-spartan text-[11px] leading-[22] text-white'>
            Mercury is the smallest planet in the Solar System and the closest
            to the Sun. Its orbit around the Sun takes 87.97 Earth days, the
            shortest of all the Sun's planets. Mercury is one of four
            terrestrial planets in the Solar System, and is a rocky body like
            Earth.
          </p>

          <p className='inline-flex items-center mt-8 font-spartan text-h3 tracking-normal text-white text-opacity-50'>
            <span>
              Source : <span className='font-bold underline'>Wikipedia</span>
            </span>
            <svg
              className='ml-1'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                opacity='0.5'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z'
                fill='white'
              />
            </svg>
          </p>
        </div>

        <div className='grid grid-cols-1 gap-y-2 w-full mt-7'>
          <div className='flex items-center justify-between border border-white border-opacity-20 px-6 pt-[9px] pb-[13px]'>
            <p className='font-spartan font-bold text-[8px] leading-4 tracking-[0.73px] text-white text-opacity-50 uppercase'>
              Rotation Time
            </p>

            <p className='font-antonio font-medium text-[20px] leading-[-0.75px] text-white uppercase'>
              58.6 Days
            </p>
          </div>

          <div className='flex items-center justify-between border border-white border-opacity-20 px-6 pt-[9px] pb-[13px]'>
            <p className='font-spartan font-bold text-[8px] leading-4 tracking-[0.73px] text-white text-opacity-50 uppercase'>
              Revolution Time
            </p>

            <p className='font-antonio font-medium text-[20px] leading-[-0.75px] text-white uppercase'>
              87.97 Days
            </p>
          </div>

          <div className='flex items-center justify-between border border-white border-opacity-20 px-6 pt-[9px] pb-[13px]'>
            <p className='font-spartan font-bold text-[8px] leading-4 tracking-[0.73px] text-white text-opacity-50 uppercase'>
              Radius
            </p>

            <p className='font-antonio font-medium text-[20px] leading-[-0.75px] text-white uppercase'>
              2,439.7 KM
            </p>
          </div>

          <div className='flex items-center justify-between border border-white border-opacity-20 px-6 pt-[9px] pb-[13px]'>
            <p className='font-spartan font-bold text-[8px] leading-4 tracking-[0.73px] text-white text-opacity-50 uppercase'>
              Average Temp.
            </p>

            <p className='font-antonio font-medium text-[20px] leading-[-0.75px] text-white uppercase'>
              430˚C
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Mercury
