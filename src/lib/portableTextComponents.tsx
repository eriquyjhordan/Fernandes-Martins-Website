import Image from 'next/image'
import { urlFor } from './imageUrl'

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }

      const imageUrl = urlFor(value.asset).url()
      const altText = value.alt || 'Blog Image'
      console.log(value)

      return (
        <div className="my-4">
          <Image src={imageUrl} alt={altText} width={400} height={400} />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold my-4">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold my-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold my-4">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-bold my-4">{children}</h4>
    ),
    h5: ({ children }: any) => (
      <h5 className="text-lg font-bold my-4">{children}</h5>
    ),
    h6: ({ children }: any) => (
      <h6 className="text-base font-bold my-4">{children}</h6>
    ),
    normal: ({ children }: any) => <p className="my-4">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside my-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside my-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="my-2">{children}</li>,
    number: ({ children }: any) => <li className="my-2">{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const target = (value?.href || '').startsWith('http')
        ? '_blank'
        : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-500 underline"
        >
          {children}
        </a>
      )
    },
  },
}

export default portableTextComponents
