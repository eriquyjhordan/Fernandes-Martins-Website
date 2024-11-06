import BlogHeaderImage from '@/components/blogHeaderImage'
import BlogPost from '@/components/blogPost'
import ContactForm from '@/components/contactForm'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Article() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHeaderImage />
      <div className="flex mt-10 p-4 max-w-[1216px] justify-between mx-auto">
        <BlogPost />
        <section>
          <ContactForm />
        </section>
      </div>
      <Footer />
    </div>
  )
}
