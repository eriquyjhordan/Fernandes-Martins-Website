import portableTextComponents from '@/lib/portableTextComponents'
import sanityClient from '@/lib/sanityClient'
import { PortableText } from '@portabletext/react'

export default async function BlogPost() {
  async function getPost() {
    const response = await sanityClient.fetch(`
      *[_type == "post" && _id == "6f4f7c02-c751-4b6a-a684-07e8f1744d40"] {
        title,
        body,
        "author": author->name,
        "mainImage": mainImage.asset->url
    }`)

    console.log(response[0].body)

    return response
  }

  const post = await getPost()

  return (
    <div>
      <div className="max-w-[750px]">
        <PortableText
          value={post[0].body}
          components={portableTextComponents}
        />
      </div>
    </div>
  )
}
