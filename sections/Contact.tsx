import { ContactForm } from '../components'

export default function Contact() {
  return (
    <div id="contact" className="flex items-center justify-center pl-16 pr-32">
      <div className="grid grid-cols-2 gap-8 w-full">
        <div>
          <h2 className="text-7xl font-serif font-bold  tracking-wider	my-4">
            Get in touch
          </h2>
          <p className="text-lg tracking-wider mr-16">
            Contact me at{' '}
            <a
              href="mailto:  hello@wilsoncooked.com"
              target="_blank"
              rel="noreferrer"
              className=" break-words "
            >
              hello@wilsoncooked.com
            </a>{' '}
            or use the contact form and I&apos;ll get back to you soon.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
